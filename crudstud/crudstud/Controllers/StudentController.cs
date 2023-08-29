using crudstud.Models;
using crudstud.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace crudstud.Controllers
{
    [EnableCors(headers:"*",origins:"*",methods:"*")]

    public class StudentController : ApiController
    {
        public readonly StudentInterface local;
        public StudentController() { }
        public StudentController(StudentInterface local1)
        {
            this.local = local1;
        }
    
       [Route("api/StudentController/Get")]
        [HttpGet]
        public List<StudentModel> GetStudent()
        {
            var std = local.StudentDetails();
            return std;
        }
        [Route("api/StudentController/Create")]
        [HttpPost]
        public IHttpActionResult Create(StudentModel mod)
        {
            var re = local.create(mod);
            if (re != null)
            {
                return Ok();
            }
            return NotFound();
        }
        [Route("api/StudentController/Delete/{id}")]
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var status = local.delete(id);
            if (status != null)
            {
                return Ok(status);
            }
            return NotFound();
        }
    }
}
