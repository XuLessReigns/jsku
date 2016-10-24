using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class API_article_test : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //StreamReader reader = new StreamReader(Request.InputStream);
        //string str = reader.ReadToEnd();
        //ResultModel rm = new ResultModel();
        //rm.result = "你给我传递的是："+ str;
        //string result = JsonOper.SerializeObject(rm);
        //System.Threading.Thread.Sleep(7000);
        //Response.Write(result);
        //Response.End();

		//string callback = Request.QueryString["callback"];
		//string username = Request.QueryString["uid"];
		//string password = Request.QueryString["pwd"];
        //ResultModel rm = new ResultModel();
        //rm.result = "你给我传递的是：" + username + "|" + password;
        //string result = JsonOper.SerializeObject(rm);
		
        //System.Threading.Thread.Sleep(10000);
        //Response.Write(result);
        //Response.Write(callback+"("+result+")");
        //Response.End();
		//string callback = Request.QueryString["call"];
		//Response.Write(callback + "(\"我是后台传来的数据\")");
		//Response.End();
		
		string callback = Request.QueryString["callback"];
		string name = Request.QueryString["name"];
		string age = Request.QueryString["age"];
		Response.Write(callback + "({\"name\":\""+name+"\",\"age\":\""+age+"\"})");
		Response.End();
    }
}