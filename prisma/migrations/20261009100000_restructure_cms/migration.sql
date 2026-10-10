-- Restructure the CMS: the single generic "Content" table is split into related tables
-- (Page, PageSeo, PageHero, PageCta, PageSection, SectionText/Link/Icon/Image, FaqGroup,
--  SiteSetting, HeaderSetting, FooterSetting, DemoFormSetting...). See DATABASE.md.
--
-- NOTHING IS DELETED: every value is COPIED out of the old `Content` table, which stays in the
-- database untouched (Prisma model "LegacyContent") as a backup.
-- Other tables (AdminUser, Lead, MenuItem, PricingPlan, PricingFeature) are not changed.
-- Faq only gets a new column "groupId" and every existing question is attached to the home page FAQ block.

-- CreateTable
CREATE TABLE `SiteSetting` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `logo` VARCHAR(1000) NULL,
    `logoAlt` VARCHAR(1000) NULL,
    `whatsappNumber` VARCHAR(40) NULL,
    `phone` VARCHAR(1000) NULL,
    `email` VARCHAR(1000) NULL,
    `address` TEXT NULL,
    `defaultOgImage` VARCHAR(1000) NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HeaderSetting` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `ctaText` VARCHAR(1000) NULL,
    `ctaLink` VARCHAR(1000) NULL,
    `loginText` VARCHAR(1000) NULL,
    `loginLink` VARCHAR(1000) NULL,
    `dropdownLabel` VARCHAR(1000) NULL,
    `dropdownLink` VARCHAR(1000) NULL,
    `mobileCtaText` VARCHAR(1000) NULL,
    `mobileWhatsappText` VARCHAR(1000) NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FooterSetting` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `title` VARCHAR(1000) NULL,
    `text` TEXT NULL,
    `productTitle` VARCHAR(1000) NULL,
    `solutionsTitle` VARCHAR(1000) NULL,
    `companyTitle` VARCHAR(1000) NULL,
    `copyright` VARCHAR(1000) NULL,
    `trademark` VARCHAR(1000) NULL,
    `ctaText` VARCHAR(1000) NULL,
    `ctaLink` VARCHAR(1000) NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DemoFormSetting` (
    `id` INTEGER NOT NULL DEFAULT 1,
    `title` VARCHAR(1000) NULL,
    `subtitle` VARCHAR(1000) NULL,
    `namePlaceholder` VARCHAR(1000) NULL,
    `companyPlaceholder` VARCHAR(1000) NULL,
    `phonePlaceholder` VARCHAR(1000) NULL,
    `interestDefault` VARCHAR(1000) NULL,
    `button` VARCHAR(1000) NULL,
    `note` VARCHAR(1000) NULL,
    `whatsappMessage` VARCHAR(1000) NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DemoFormInterest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `formId` INTEGER NOT NULL DEFAULT 1,
    `label` VARCHAR(1000) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    INDEX `DemoFormInterest_formId_sortOrder_idx`(`formId`, `sortOrder`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Page` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(60) NOT NULL,
    `label` VARCHAR(120) NOT NULL,
    `path` VARCHAR(255) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    UNIQUE INDEX `Page_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PageSeo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pageId` INTEGER NOT NULL,
    `title` VARCHAR(1000) NULL,
    `description` TEXT NULL,
    `ogTitle` VARCHAR(1000) NULL,
    `ogDescription` TEXT NULL,
    `ogImage` VARCHAR(1000) NULL,
    `canonical` VARCHAR(1000) NULL,
    `keywords` VARCHAR(1000) NULL,
    `noindex` BOOLEAN NOT NULL DEFAULT false,
    `updatedAt` DATETIME(3) NOT NULL,
    UNIQUE INDEX `PageSeo_pageId_key`(`pageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PageHero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pageId` INTEGER NOT NULL,
    `title` VARCHAR(1000) NULL,
    `titleStart` VARCHAR(1000) NULL,
    `titleGradient` VARCHAR(1000) NULL,
    `titleEnd` VARCHAR(1000) NULL,
    `lead` TEXT NULL,
    `sub` TEXT NULL,
    `primaryButton` VARCHAR(1000) NULL,
    `secondaryButton` VARCHAR(1000) NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    UNIQUE INDEX `PageHero_pageId_key`(`pageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PageCta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pageId` INTEGER NOT NULL,
    `title` VARCHAR(1000) NULL,
    `text1` TEXT NULL,
    `text2` TEXT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    UNIQUE INDEX `PageCta_pageId_key`(`pageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PageSubnavItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pageId` INTEGER NOT NULL,
    `anchor` VARCHAR(40) NOT NULL,
    `label` VARCHAR(1000) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    UNIQUE INDEX `PageSubnavItem_pageId_anchor_key`(`pageId`, `anchor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FaqGroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pageId` INTEGER NOT NULL,
    `heading` VARCHAR(1000) NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    INDEX `FaqGroup_pageId_idx`(`pageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PageSection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pageId` INTEGER NOT NULL,
    `code` VARCHAR(20) NOT NULL,
    `title` VARCHAR(120) NOT NULL,
    `sortOrder` INTEGER NOT NULL DEFAULT 0,
    `visible` BOOLEAN NOT NULL DEFAULT true,
    UNIQUE INDEX `PageSection_pageId_code_key`(`pageId`, `code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SectionText` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sectionId` INTEGER NOT NULL,
    `code` VARCHAR(20) NOT NULL,
    `value` TEXT NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    UNIQUE INDEX `SectionText_sectionId_code_key`(`sectionId`, `code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SectionLink` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sectionId` INTEGER NOT NULL,
    `code` VARCHAR(20) NOT NULL,
    `href` VARCHAR(1000) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    UNIQUE INDEX `SectionLink_sectionId_code_key`(`sectionId`, `code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SectionIcon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sectionId` INTEGER NOT NULL,
    `code` VARCHAR(20) NOT NULL,
    `icon` VARCHAR(60) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    UNIQUE INDEX `SectionIcon_sectionId_code_key`(`sectionId`, `code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SectionImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sectionId` INTEGER NOT NULL,
    `code` VARCHAR(20) NOT NULL,
    `url` VARCHAR(1000) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    UNIQUE INDEX `SectionImage_sectionId_code_key`(`sectionId`, `code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DemoFormInterest` ADD CONSTRAINT `DemoFormInterest_formId_fkey` FOREIGN KEY (`formId`) REFERENCES `DemoFormSetting`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PageSeo` ADD CONSTRAINT `PageSeo_pageId_fkey` FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PageHero` ADD CONSTRAINT `PageHero_pageId_fkey` FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PageCta` ADD CONSTRAINT `PageCta_pageId_fkey` FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PageSubnavItem` ADD CONSTRAINT `PageSubnavItem_pageId_fkey` FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FaqGroup` ADD CONSTRAINT `FaqGroup_pageId_fkey` FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PageSection` ADD CONSTRAINT `PageSection_pageId_fkey` FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SectionText` ADD CONSTRAINT `SectionText_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `PageSection`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SectionLink` ADD CONSTRAINT `SectionLink_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `PageSection`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SectionIcon` ADD CONSTRAINT `SectionIcon_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `PageSection`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SectionImage` ADD CONSTRAINT `SectionImage_sectionId_fkey` FOREIGN KEY (`sectionId`) REFERENCES `PageSection`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- ===== DATA: copy the old Content rows into the new tables =====

-- Pages
INSERT INTO `Page` (`slug`, `label`, `path`, `sortOrder`) VALUES
    ('home', 'Home page', '/', 1),
    ('features', 'Features page', '/features', 2),
    ('solutions', 'Solutions page', '/solutions', 3),
    ('integrations', 'Integrations page', '/integrations', 4),
    ('pricing', 'Pricing page (texts only – plans are under Pricing Plans)', '/pricing', 5),
    ('about', 'About page', '/about', 6);

-- SEO (one row per page)
INSERT INTO `PageSeo` (`pageId`, `title`, `description`, `ogTitle`, `ogDescription`, `ogImage`, `canonical`, `keywords`, `noindex`, `updatedAt`)
SELECT p.`id`,
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.seo.title')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.seo.description')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.seo.ogTitle')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.seo.ogDescription')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.seo.ogImage')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.seo.canonical')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.seo.keywords')),
    COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.seo.noindex')) = '1', 0),
    NOW(3)
FROM `Page` p;

-- Hero (only pages that have hero texts)
INSERT INTO `PageHero` (`pageId`, `title`, `titleStart`, `titleGradient`, `titleEnd`, `lead`, `sub`, `primaryButton`, `secondaryButton`, `updatedAt`)
SELECT p.`id`,
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.hero.title')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.hero.titleStart')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.hero.titleGradient')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.hero.titleEnd')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.hero.lead')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.hero.sub')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.hero.primaryButton')),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.hero.secondaryButton')),
    NOW(3)
FROM `Page` p
WHERE EXISTS (SELECT 1 FROM `Content` c WHERE c.`key` LIKE CONCAT(p.`slug`, '.hero.%'));

-- Call-to-action (Home: cta.text1/text2, Pricing: cta.text -> text1)
INSERT INTO `PageCta` (`pageId`, `title`, `text1`, `text2`, `updatedAt`)
SELECT p.`id`,
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.cta.title')),
    COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.cta.text1')), (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.cta.text'))),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.cta.text2')),
    NOW(3)
FROM `Page` p
WHERE EXISTS (SELECT 1 FROM `Content` c WHERE c.`key` LIKE CONCAT(p.`slug`, '.cta.%'));

-- Features sub-menu
INSERT INTO `PageSubnavItem` (`pageId`, `anchor`, `label`, `sortOrder`)
SELECT p.`id`, 'api', c.`value`, 1
FROM `Page` p JOIN `Content` c ON c.`key` = 'features.subnav.api'
WHERE p.`slug` = 'features';
INSERT INTO `PageSubnavItem` (`pageId`, `anchor`, `label`, `sortOrder`)
SELECT p.`id`, 'marketing', c.`value`, 2
FROM `Page` p JOIN `Content` c ON c.`key` = 'features.subnav.marketing'
WHERE p.`slug` = 'features';
INSERT INTO `PageSubnavItem` (`pageId`, `anchor`, `label`, `sortOrder`)
SELECT p.`id`, 'ai', c.`value`, 3
FROM `Page` p JOIN `Content` c ON c.`key` = 'features.subnav.ai'
WHERE p.`slug` = 'features';
INSERT INTO `PageSubnavItem` (`pageId`, `anchor`, `label`, `sortOrder`)
SELECT p.`id`, 'chatbot', c.`value`, 4
FROM `Page` p JOIN `Content` c ON c.`key` = 'features.subnav.chatbot'
WHERE p.`slug` = 'features';
INSERT INTO `PageSubnavItem` (`pageId`, `anchor`, `label`, `sortOrder`)
SELECT p.`id`, 'inbox', c.`value`, 5
FROM `Page` p JOIN `Content` c ON c.`key` = 'features.subnav.inbox'
WHERE p.`slug` = 'features';
INSERT INTO `PageSubnavItem` (`pageId`, `anchor`, `label`, `sortOrder`)
SELECT p.`id`, 'automation', c.`value`, 6
FROM `Page` p JOIN `Content` c ON c.`key` = 'features.subnav.automation'
WHERE p.`slug` = 'features';
INSERT INTO `PageSubnavItem` (`pageId`, `anchor`, `label`, `sortOrder`)
SELECT p.`id`, 'crm', c.`value`, 7
FROM `Page` p JOIN `Content` c ON c.`key` = 'features.subnav.crm'
WHERE p.`slug` = 'features';
INSERT INTO `PageSubnavItem` (`pageId`, `anchor`, `label`, `sortOrder`)
SELECT p.`id`, 'analytics', c.`value`, 8
FROM `Page` p JOIN `Content` c ON c.`key` = 'features.subnav.analytics'
WHERE p.`slug` = 'features';

-- Demo form texts (shared by all pages) + its drop-down options
INSERT INTO `DemoFormSetting` (`id`, `title`, `subtitle`, `namePlaceholder`, `companyPlaceholder`, `phonePlaceholder`, `interestDefault`, `button`, `note`, `whatsappMessage`, `updatedAt`)
SELECT 1,
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'home.form.title'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'home.form.subtitle'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'home.form.namePlaceholder'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'home.form.companyPlaceholder'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'home.form.phonePlaceholder'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'home.form.interestDefault'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'home.form.button'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'home.form.note'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'home.form.whatsappMessage'),
    NOW(3);

INSERT INTO `DemoFormInterest` (`formId`, `label`, `sortOrder`)
SELECT 1, c.`value`, 1 FROM `Content` c WHERE c.`key` = 'home.form.interest1';
INSERT INTO `DemoFormInterest` (`formId`, `label`, `sortOrder`)
SELECT 1, c.`value`, 2 FROM `Content` c WHERE c.`key` = 'home.form.interest2';
INSERT INTO `DemoFormInterest` (`formId`, `label`, `sortOrder`)
SELECT 1, c.`value`, 3 FROM `Content` c WHERE c.`key` = 'home.form.interest3';
INSERT INTO `DemoFormInterest` (`formId`, `label`, `sortOrder`)
SELECT 1, c.`value`, 4 FROM `Content` c WHERE c.`key` = 'home.form.interest4';
INSERT INTO `DemoFormInterest` (`formId`, `label`, `sortOrder`)
SELECT 1, c.`value`, 5 FROM `Content` c WHERE c.`key` = 'home.form.interest5';

-- SiteSetting
INSERT INTO `SiteSetting` (`id`, `logo`, `logoAlt`, `whatsappNumber`, `phone`, `email`, `address`, `defaultOgImage`, `updatedAt`)
SELECT 1,
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.logo'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.logoAlt'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.whatsappNumber'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.phone'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.email'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.address'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.defaultOgImage'),
    NOW(3);

-- HeaderSetting
INSERT INTO `HeaderSetting` (`id`, `ctaText`, `ctaLink`, `loginText`, `loginLink`, `dropdownLabel`, `dropdownLink`, `mobileCtaText`, `mobileWhatsappText`, `updatedAt`)
SELECT 1,
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.headerCtaText'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.headerCtaLink'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.loginText'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.loginLink'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.dropdownLabel'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.dropdownLink'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.mobileCtaText'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.mobileWhatsappText'),
    NOW(3);

-- FooterSetting
INSERT INTO `FooterSetting` (`id`, `title`, `text`, `productTitle`, `solutionsTitle`, `companyTitle`, `copyright`, `trademark`, `ctaText`, `ctaLink`, `updatedAt`)
SELECT 1,
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.footerTitle'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.footerText'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.productTitle'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.solutionsTitle'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.companyTitle'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.copyright'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.trademark'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.footerCtaText'),
    (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'site.footerCtaLink'),
    NOW(3);

-- Sections of every page (name, order, and whether the admin had hidden it)
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's01', 'Hero', 1, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s01')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's02', 'Platform', 2, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s02')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's03', 'Marketing', 3, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s03')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's04', 'AI Agent', 4, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s04')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's05', 'Automation', 5, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s05')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's06', 'Team Inbox', 6, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s06')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's07', 'CRM', 7, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s07')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's08', 'Integrations', 8, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s08')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's09', 'Teams', 9, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s09')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's10', 'Industries', 10, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s10')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's11', 'Click To Whatsapp', 11, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s11')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's12', 'How It Works', 12, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s12')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's13', 'Analytics', 13, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s13')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's14', 'UAE', 14, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s14')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's15', 'Why', 15, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s15')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's16', 'FAQ', 16, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s16')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's17', 'Final CTA + Demo Form', 17, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s17')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'home';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's01', 'Hero', 1, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s01')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's02', 'Overview', 2, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s02')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's03', 'API', 3, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s03')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's04', 'Marketing', 4, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s04')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's05', 'AI Agent', 5, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s05')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's06', 'Chatbot', 6, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s06')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's07', 'Inbox', 7, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s07')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's08', 'Automation', 8, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s08')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's09', 'CRM', 9, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s09')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's10', 'Analytics', 10, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s10')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's11', 'AI + Human', 11, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s11')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's12', 'Teams', 12, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s12')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's13', 'Industries', 13, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s13')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's14', 'How It Works', 14, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s14')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's15', 'Why', 15, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s15')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's16', 'FAQ', 16, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s16')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's17', 'CTA', 17, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s17')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'features';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's01', 'Hero', 1, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s01')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'solutions';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's02', 'Teams', 2, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s02')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'solutions';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's03', 'Industries', 3, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s03')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'solutions';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's04', 'CTA', 4, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s04')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'solutions';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's01', 'Hero', 1, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s01')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'integrations';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's02', 'Directory', 2, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s02')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'integrations';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's03', 'Zivora', 3, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s03')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'integrations';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's04', 'CRM', 4, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s04')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'integrations';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's05', 'Ecommerce', 5, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s05')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'integrations';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's06', 'Calendar', 6, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s06')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'integrations';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's07', 'API', 7, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s07')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'integrations';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's08', 'Workflow', 8, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s08')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'integrations';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's09', 'CTA', 9, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s09')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'integrations';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's02', 'Pricing cards (badge text)', 1, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s02')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'pricing';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's03', 'Bottom call-to-action buttons', 2, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s03')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'pricing';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's01', 'Our story', 1, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s01')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'about';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's02', 'What we stand for', 2, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s02')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'about';
INSERT INTO `PageSection` (`pageId`, `code`, `title`, `sortOrder`, `visible`)
SELECT p.`id`, 's03', 'Call to action', 3, COALESCE((SELECT c.`value` FROM `Content` c WHERE c.`key` = CONCAT(p.`slug`, '.vis.s03')) <> '0', 1)
FROM `Page` p WHERE p.`slug` = 'about';

-- Section content, one table per kind of content
-- SectionText
INSERT INTO `SectionText` (`sectionId`, `code`, `value`, `updatedAt`)
SELECT ps.`id`, SUBSTRING_INDEX(c.`key`, '.', -1), c.`value`, c.`updatedAt`
FROM `Content` c
JOIN `Page` p ON p.`slug` = SUBSTRING_INDEX(c.`key`, '.', 1)
JOIN `PageSection` ps ON ps.`pageId` = p.`id` AND ps.`code` = SUBSTRING_INDEX(SUBSTRING_INDEX(c.`key`, '.', 2), '.', -1)
WHERE c.`key` REGEXP '^[a-z]+[.]s[0-9]+[.]t[0-9]+$';

-- SectionLink
INSERT INTO `SectionLink` (`sectionId`, `code`, `href`, `updatedAt`)
SELECT ps.`id`, SUBSTRING_INDEX(c.`key`, '.', -1), c.`value`, c.`updatedAt`
FROM `Content` c
JOIN `Page` p ON p.`slug` = SUBSTRING_INDEX(c.`key`, '.', 1)
JOIN `PageSection` ps ON ps.`pageId` = p.`id` AND ps.`code` = SUBSTRING_INDEX(SUBSTRING_INDEX(c.`key`, '.', 2), '.', -1)
WHERE c.`key` REGEXP '^[a-z]+[.]s[0-9]+[.]l[0-9]+$';

-- SectionIcon
INSERT INTO `SectionIcon` (`sectionId`, `code`, `icon`, `updatedAt`)
SELECT ps.`id`, SUBSTRING_INDEX(c.`key`, '.', -1), c.`value`, c.`updatedAt`
FROM `Content` c
JOIN `Page` p ON p.`slug` = SUBSTRING_INDEX(c.`key`, '.', 1)
JOIN `PageSection` ps ON ps.`pageId` = p.`id` AND ps.`code` = SUBSTRING_INDEX(SUBSTRING_INDEX(c.`key`, '.', 2), '.', -1)
WHERE c.`key` REGEXP '^[a-z]+[.]s[0-9]+[.]i[0-9]+$';

-- SectionImage
INSERT INTO `SectionImage` (`sectionId`, `code`, `url`, `updatedAt`)
SELECT ps.`id`, SUBSTRING_INDEX(c.`key`, '.', -1), c.`value`, c.`updatedAt`
FROM `Content` c
JOIN `Page` p ON p.`slug` = SUBSTRING_INDEX(c.`key`, '.', 1)
JOIN `PageSection` ps ON ps.`pageId` = p.`id` AND ps.`code` = SUBSTRING_INDEX(SUBSTRING_INDEX(c.`key`, '.', 2), '.', -1)
WHERE c.`key` REGEXP '^[a-z]+[.]s[0-9]+[.]m[0-9]+$';

-- FAQ: the questions now belong to a FAQ block (FaqGroup) of the home page
ALTER TABLE `Faq` ADD COLUMN `groupId` INTEGER NULL;

INSERT INTO `FaqGroup` (`pageId`, `heading`, `sortOrder`)
SELECT p.`id`, (SELECT c.`value` FROM `Content` c WHERE c.`key` = 'home.faq.heading'), 0 FROM `Page` p WHERE p.`slug` = 'home';

UPDATE `Faq` SET `groupId` = (SELECT MIN(g.`id`) FROM `FaqGroup` g JOIN `Page` p ON p.`id` = g.`pageId` WHERE p.`slug` = 'home');

ALTER TABLE `Faq` MODIFY `groupId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `Faq_groupId_idx` ON `Faq`(`groupId`);

-- AddForeignKey
ALTER TABLE `Faq` ADD CONSTRAINT `Faq_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `FaqGroup`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
