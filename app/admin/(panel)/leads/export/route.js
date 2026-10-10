// /admin/leads/export - downloads all demo requests as a CSV file (opens in Excel)
import { prisma } from "@/lib/db";
import { getAdmin } from "@/lib/auth";

// Wrap in quotes; stop spreadsheet "formula injection" (cells starting with = + - @)
function cell(value) {
  let text = String(value ?? "");
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET() {
  if (!(await getAdmin())) return new Response("Unauthorized", { status: 401 });

  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  const lines = [["Date", "Name", "Company", "WhatsApp", "Interest", "Done"].map(cell).join(",")];
  for (const l of leads) {
    lines.push([l.createdAt.toISOString(), l.name, l.company, l.phone, l.interest, l.handled ? "yes" : "no"].map(cell).join(","));
  }

  return new Response("\uFEFF" + lines.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="demo-requests.csv"',
      "Cache-Control": "no-store",
    },
  });
}
