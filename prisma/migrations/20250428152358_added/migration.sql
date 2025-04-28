-- DropForeignKey
ALTER TABLE "Contacts" DROP CONSTRAINT "Contacts_groupId_fkey";

-- AddForeignKey
ALTER TABLE "Contacts" ADD CONSTRAINT "Contacts_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
