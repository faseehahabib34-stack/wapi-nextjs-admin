// /admin/media - every image you uploaded (stored in the Media table)
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { deleteMedia } from "../../_actions/media-actions";
import ConfirmButton from "../../_components/ConfirmButton";
import CopyButton from "../../_components/CopyButton";
import EmptyState from "../../_components/EmptyState";
import Icon from "../../_components/Icon";
import MediaUploader from "../../_components/MediaUploader";
import PageHeader from "../../_components/PageHeader";
import SearchBox from "../../_components/SearchBox";
import { cardClass, secondaryButton } from "../../_components/ui";
import { formatBytes } from "../../_components/format";
import Link from "next/link";

export default async function MediaPage({ searchParams }) {
  await requireAdmin();
  const { q: rawQ = "" } = await searchParams;
  const q = String(rawQ).trim().slice(0, 100);

  // "select" leaves out the picture itself (the heavy column) - we only need the list
  const [files, total] = await Promise.all([
    prisma.media.findMany({
      where: q ? { name: { contains: q } } : {},
      select: { name: true, size: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.media.aggregate({ _count: { _all: true }, _sum: { size: true } }),
  ]);
  const count = total._count._all;

  return (
    <div>
      <PageHeader
        title="Media Library"
        description={`Every image you uploaded. You can also upload from any image box in Site Settings or a page section. ${count} image${count === 1 ? "" : "s"} · ${formatBytes(total._sum.size ?? 0)} used.`}
      />

      <div className="mb-6">
        <MediaUploader />
      </div>

      {count > 0 && (
        <div className="mb-4 flex justify-end">
          <SearchBox action="/admin/media" q={q} placeholder="Search file names..." />
        </div>
      )}

      {files.length === 0 ? (
        count === 0 ? (
          <EmptyState icon="image" title="No uploaded images yet" description="Drop an image in the box above to add your first one." />
        ) : (
          <EmptyState icon="search" title="No images match" description="Try another file name." action={<Link href="/admin/media" className={secondaryButton}>Clear search</Link>} />
        )
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {files.map((file) => (
            <li key={file.name} className={`${cardClass} flex flex-col overflow-hidden`}>
              <div className="flex h-40 items-center justify-center bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%,transparent_75%,#f1f5f9_75%),linear-gradient(45deg,#f1f5f9_25%,transparent_25%,transparent_75%,#f1f5f9_75%)] bg-[length:16px_16px] bg-[position:0_0,8px_8px] p-3">
                <img src={`/uploads/${file.name}`} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex flex-1 flex-col gap-3 border-t border-slate-100 p-4">
                <div className="min-w-0">
                  <p className="truncate font-mono text-xs text-slate-700" title={file.name}>
                    {file.name}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {formatBytes(file.size)} · {file.createdAt.toLocaleDateString("en-GB")}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-2">
                  <CopyButton value={`/uploads/${file.name}`} />
                  <form action={deleteMedia.bind(null, file.name)}>
                    <ConfirmButton title="Delete this image?" message="Pages that use it will show a broken image. This cannot be undone.">
                      <Icon name="trash" className="h-4 w-4" /> Delete
                    </ConfirmButton>
                  </form>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
