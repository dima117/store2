using System;
using System.ComponentModel.DataAnnotations;

namespace store2.Admin.Model
{
    public class PageInput
    {
        [Required, StringLength(64), RegularExpression("^[a-z0-9-]+$")]
        public string Code { get; set; }

        [Required, StringLength(255)]
        public string Title { get; set; }

        [Required]
        public string Body { get; set; }
    }
}
