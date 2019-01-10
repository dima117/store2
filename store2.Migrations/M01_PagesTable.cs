using System;
using System.Data;
using ThinkingHome.Migrator.Framework;
using ThinkingHome.Migrator.Framework.Extensions;

namespace store2.Migrations
{
    [Migration(1)]
    public class M01_PagesTable: Migration
    {
        public override void Apply()
        {
            Database.AddTable("Page",
                new Column("Id", DbType.Guid, ColumnProperty.PrimaryKey),
                new Column("Code", DbType.String.WithSize(64), ColumnProperty.NotNull),
                new Column("Title", DbType.String.WithSize(255), ColumnProperty.NotNull),
                new Column("Body", DbType.String.WithSize(Int32.MaxValue), ColumnProperty.NotNull)
                );

            Database.AddUniqueConstraint("UC_Page_Code", "Page", "Code");
        }

        public override void Revert()
        {
            Database.RemoveConstraint("Page", "UC_Page_Code");

            Database.RemoveTable("Page");
        }
    }
}
