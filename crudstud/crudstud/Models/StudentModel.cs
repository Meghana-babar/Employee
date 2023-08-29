using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace crudstud.Models
{
    public class StudentModel
    {
        public int sid { get; set; }
        public string sname { get; set; }
        public Nullable<System.DateTime> dob { get; set; }
        public string gender { get; set; }
        public string branch { get; set; }
    }
}