<%-- 
    Document   : index
    Created on : Aug 30, 2013, 10:34:05 PM
    Author     : Kevin
--%>
<%@taglib uri="http://jawr.net/tags" prefix="jwr"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Flush The Buffer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <jwr:style src="/bundles/global.css" />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>
            $(document).ready(function(){ 
                $("#contact").click(function(){ alert("Eh I dont really want to talk to you.")});
            });
        </script>
    </head>
    <body>
        <header>
            <img id="banner" src="images/BufferFlushBanner.jpg"/>
        </header>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="gameOfLife">Game Of Life</a></li>
                <li><a href="insult">Insult</a></li>
                <li><a href="about">About</a></li>
            </ul>
        </nav>
        <section id="Content">
            <h1>Welcome to the site!</h1>
        </section>
        <footer>
            <ul>
                <li><a id="contact">Contact Us</a></li>
            </ul>
        </footer>
    </body>
</html>
