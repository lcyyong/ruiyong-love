/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package myapp;

import java.io.IOException;
import java.util.Properties;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class IndexAction extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest req, HttpServletResponse resp)
      throws IOException {
		  
	String fullName = (String)req.getParameter("fullName");
    System.out.println("----> get : " + fullName);
	
	resp.setContentType("text/plain");
    resp.getWriter().println("{ \"name\": "+fullName+" }");
  }
  
  @Override
  public void doPost(HttpServletRequest req, HttpServletResponse resp)
      throws IOException {
		  
	  String fullName = (String)req.getParameter("fullName");
	    System.out.println("----> post : " + fullName);
		
	    // Recipient's email ID needs to be mentioned.
	    String to = "lcyyong@live.cn";

	    // Sender's email ID needs to be mentioned
	    String from = "ruiyonglove@gmail.com";

	    // Assuming you are sending email from localhost
	    String host = "localhost";

	    // Get system properties
	    Properties properties = System.getProperties();

	    // Setup mail server
	    properties.setProperty("mail.smtp.host", host);

	    // Get the default Session object.
	    Session session = Session.getDefaultInstance(properties);

	    try {
	       // Create a default MimeMessage object.
	       MimeMessage message = new MimeMessage(session);

	       // Set From: header field of the header.
	       message.setFrom(new InternetAddress(from));

	       // Set To: header field of the header.
	       message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

	       // Set Subject: header field
	       message.setSubject("This is the Subject Line!");

	       // Now set the actual message
	       message.setText("This is actual message");

	       // Send message
	       Transport.send(message);
	       System.out.println("Sent message successfully....");
	    } catch (MessagingException mex) {
	       mex.printStackTrace();
	    }
	    
	    
		resp.setContentType("text/plain");
	    resp.getWriter().println("{ \"name\": \""+fullName+"\" }");
  }
}
