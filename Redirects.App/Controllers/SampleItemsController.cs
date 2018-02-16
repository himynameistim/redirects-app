using Redirects.App.Models;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.SecurityModel;
using Sitecore.Services.Core;
using Sitecore.Services.Infrastructure.Web.Http;
using Sitecore.Web.Http.Filters;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;

namespace Redirects.App.Controllers
{
    [ServicesController("redirectmanager/redirects")]
    [Authorize]
    public class RedirectManagerItemsController : ServicesApiController
    {
        private static readonly ID RedirectsFolderId = new ID("{F9B6695A-8769-4701-94FA-D11E899D0E68}");
        private static readonly ID RedirectsForlderTemplateId = new ID("{8BEF76F0-DEAA-4939-B9C1-F357E1875D5D}");
        private static readonly ID RedirectTemplateId = new ID("{B5967A68-7F70-42D3-9874-0E4D001DBC20}");

        [HttpGet]
        public System.Web.Http.IHttpActionResult Get(string id)
        {
            return Ok(id);
        }

        [HttpGet]
        public System.Web.Http.IHttpActionResult GetAll()
        {
            List<RedirectItem> redirects = new List<RedirectItem>();

            var db = Sitecore.Configuration.Factory.GetDatabase("master");
            Item item;
            using (new SecurityDisabler())
            {
                item = db?.GetItem(RedirectsFolderId);
                if (item == null)
                {
                    return NotFound();
                }

                if (item.TemplateID != RedirectsForlderTemplateId)
                {
                    return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.Forbidden,
                        "Item has the wrong template type"));
                }

                foreach (Item childItem in item.Children)
                {
                    if (childItem.TemplateID == RedirectTemplateId)
                    {
                        redirects.Add(
                        new RedirectItem
                        {
                            Name = childItem.Name,
                            originalUrl = childItem["Requested Url"],
                            desinationUrl = childItem["Redirect To Url"]
                        });
                    }
                }
            }

            return Ok(redirects);
        }

        //[HttpPost]
        //[ValidateHttpAntiForgeryToken]  // This attribute secures the method with Anti-CSRF
        //public System.Web.Http.IHttpActionResult Edit(string id, SampleItem updatedItem)
        //{
        //    if (string.IsNullOrEmpty(id))
        //    {
        //        return BadRequest("Root item ID is not specified");
        //    }

        //    if (updatedItem == null)
        //    {
        //        return BadRequest("UpdatedItem is not specified");
        //    }

        //    ID itemId;
        //    if (!ID.TryParse(id, out itemId) || ID.IsNullOrEmpty(itemId))
        //    {
        //        return BadRequest("Root item ID is not valid");
        //    }

        //    var db = Sitecore.Configuration.Factory.GetDatabase("core");
        //    using (new SecurityDisabler())
        //    {
        //        var item = db?.GetItem(itemId);
        //        if (item == null)
        //        {
        //            return NotFound();
        //        }

        //        if (item.TemplateID != SampleItemTemplateId)
        //        {
        //            return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.Forbidden,
        //                "Item has the wrong template type"));
        //        }

        //        item.Editing.BeginEdit();
        //        try
        //        {
        //            item.Name = updatedItem.Name;
        //            item["Description"] = updatedItem.Description;
        //            item["FieldA"] = updatedItem.FieldA;
        //            item["FieldB"] = updatedItem.FieldB;
        //        }
        //        finally
        //        {
        //            item.Editing.EndEdit();
        //        }
        //    }
        //    return ResponseMessage(Request.CreateResponse(HttpStatusCode.NoContent));
        //}
    }
}