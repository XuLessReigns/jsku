using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class API_article_timeout : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
		System.Threading.Thread.Sleep(5000);
        Response.Write("数据回来啦！");
        Response.End();
	}
}