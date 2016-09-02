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
        <title>Game of Life</title>
        <jwr:style src="/bundles/lifegame.css" />
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.3/themes/redmond/jquery-ui.css" />
        <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
        <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
        <jwr:script src="/bundles/lib/underscore.js" />
        <jwr:script src="/bundles/lifegame.js" useRandomParam="false"/>
        <script type="text/javascript">
            $(document).ready(function() {
                $( "#slider" ).slider({
                    min: 0, 
                    max: 1000, 
                    step:50, 
                    value:250, 
                    slide: function(event, ui) {
                        window.updateInterval(ui.value);
                    }});
            });
        </script>
    </head>
    <body>
        <h1 style="color: white">Game Of Life</h2>
        <div id="controlPanel">
            &nbsp
            <input id="start" type="button" value="Start" onclick="start()"/>
            <input id="stop" type="button" value="Stop" onclick="stop()"/>
            <input id="regenerate" type="button" value="Regenerate" onclick="regenerate()"/>
            <div style="width: 500px; margin-left: auto; margin-right: auto; margin-top: 20px;">
                <div id="slider"></div>
            </div>
        </div>
        <canvas id="gameBoard" width="1000" height="1000" style="margin-top: 20px;"></canvas>
    </body>
</html>
