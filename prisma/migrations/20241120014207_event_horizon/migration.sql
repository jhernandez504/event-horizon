-- AlterTable
ALTER TABLE `Cards` ADD COLUMN `score_required` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `score` INTEGER NOT NULL DEFAULT 0;
