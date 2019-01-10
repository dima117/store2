using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace store2.Domain.Model
{
    [Table("Page")]
    public class Page
    {
        public Guid Id { get; set; }

        public string Code { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }
    }
}