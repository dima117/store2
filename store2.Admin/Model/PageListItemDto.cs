using System;
using System.ComponentModel.DataAnnotations;

namespace store2.Admin.Model
{
    public class PageListItemDto
    {
        [Required]
        public Guid Id { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        public string Title { get; set; }
    }
}
