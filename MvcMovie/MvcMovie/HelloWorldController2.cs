using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcMovie
{
    public class HelloWorldController2 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
