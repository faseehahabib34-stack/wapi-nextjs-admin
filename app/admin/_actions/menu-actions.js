"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { str, int, checked, isSafeLink } from "@/lib/form";
import { MENU_GROUPS } from "@/lib/menu-groups";

// Saves one whole menu (all its rows) at once.   Used as: saveMenuGroup.bind(null, "HEADER")
// The form sends a "rowId" for every row. New rows have ids like "new1", "new2".
export async function saveMenuGroup(group, prevState, formData) {
  await requireAdmin();
  if (!MENU_GROUPS[group]) return { error: "Unknown menu." };

  const operations = [];
  for (const id of formData.getAll("rowId").map(String)) {
    const isNew = id.startsWith("new");
    const label = str(formData, `label_${id}`, 120);
    const href = str(formData, `href_${id}`, 255);

    if (isNew && !label && !href) continue; // empty "new" row = ignore

    if (checked(formData, `delete_${id}`)) {
      if (!isNew) operations.push(prisma.menuItem.deleteMany({ where: { id: Number(id), group } }));
      continue;
    }

    if (!label || !href) return { error: "Every row needs a label and a link." };
    if (!isSafeLink(href)) return { error: `"${href}" is not a valid link. Start with /, #, https://, mailto: or tel:` };

    const data = {
      label,
      href,
      openInNewTab: checked(formData, `newTab_${id}`),
      sortOrder: int(formData, `order_${id}`, 0),
      published: checked(formData, `published_${id}`),
    };
    operations.push(
      isNew
        ? prisma.menuItem.create({ data: { ...data, group } })
        : prisma.menuItem.updateMany({ where: { id: Number(id), group }, data })
    );
  }

  await prisma.$transaction(operations);
  revalidatePath("/", "layout");
  return { success: "Saved. The website is updated." };
}
