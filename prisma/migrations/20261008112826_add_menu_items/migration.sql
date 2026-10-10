-- CreateTable
CREATE TABLE `MenuItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `group` VARCHAR(40) NOT NULL,
    `label` VARCHAR(120) NOT NULL,
    `href` VARCHAR(255) NOT NULL,
    `openInNewTab` BOOLEAN NOT NULL DEFAULT false,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `published` BOOLEAN NOT NULL DEFAULT true,

    INDEX `MenuItem_group_sortOrder_idx`(`group`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
