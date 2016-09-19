/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bufferflush.app.servlets;

import com.bufferflush.app.beans.InsultBean;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;

/**
 *
 * @author Kevin
 */
public class InsultServlet extends HttpServlet {

    private static final InsultBean insultBean = new InsultBean();

    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
                String messageType = StringUtils.trimToNull( request.getParameter("type") );

        response.setContentType("text/html;charset=UTF-8");
        try(PrintWriter out = response.getWriter()) {

            if ("welcome".equalsIgnoreCase(messageType)) {
                out.write(insultBean.getWelcomeMessage());
            } else {
                out.write(insultBean.getInsultMessage());
            }
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Servlet to generate insults";
    }
}
