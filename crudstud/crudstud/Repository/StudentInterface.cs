using crudstud.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace crudstud.Repository
{
    public interface StudentInterface
    {
        List<StudentModel> StudentDetails();//to reduce the memory 
        string create(StudentModel stud);
        //string update(StudentModel stud);
        string delete(int id);
    }
}
