<%-- 
    Document   : insult
    Created on : Aug 31, 2013, 5:40:33 PM
    Author     : Kevin
--%>
<%@ taglib uri="http://jawr.net/tags" prefix="jwr" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Insult Bot</title>
        <jwr:style src="/bundles/insult.css" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <jwr:script src="/bundles/insult.js" />  
    </head>
    <body>
        <div style="font-size:60px;">Insult Bot</div>
        <image id="insultBot" src="images/InsultBotV1.png" />
         <jsp:useBean id="insultBean" class="com.bufferflush.app.beans.InsultBean" scope="request"/>
        <div id="message" ><%= insultBean.getWelcomeMessage() %></div>
    </body>
</html>