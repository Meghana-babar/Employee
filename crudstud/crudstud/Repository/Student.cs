using crudstud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace crudstud.Repository
{
    public class Student: StudentInterface
    {
        masterEntities1 master = new masterEntities1();

        public List<StudentModel> StudentDetails()
        {
            var s = master.studentdatas.Select(a => new StudentModel()
            {
                sid = a.sid,
                sname = a.sname,
                dob = a.dob,
                gender = a.gender,
                branch = a.branch
            }
            ).ToList<StudentModel>();
            return s;
        }
        string StudentInterface.create(StudentModel mod)
        {
            var rec = master.studentdatas.Where(a => a.sid == mod.sid).FirstOrDefault();
            if (rec == null)
            {

                master.studentdatas.Add(new studentdata()
                {
                    sid = mod.sid,
                    sname = mod.sname,
                    dob = mod.dob,
                    gender = mod.gender,
                    branch = mod.branch,

                });
                master.SaveChanges();
                master.Dispose();
                return "User added";
            }
            else
            {
                rec.sid = mod.sid;
                rec.sname = mod.sname;
                rec.dob = mod.dob;
                rec.gender = mod.gender;
                rec.branch = mod.branch;
                master.SaveChanges();
                master.Dispose();
                return "User Updated";
            }


        }
        string StudentInterface.delete(int id)
        {
            masterEntities1 me = new masterEntities1();
            var Delete = me.studentdatas.Where(e => e.sid == id).FirstOrDefault();
            if (Delete != null)
            {
                me.studentdatas.Remove(Delete);
            }
            me.SaveChanges();
            me.Dispose();
            return "deleted";
        }

    }
}