/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.bufferflush.app.beans;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

/**
 *
 * @author Kevin
 */
public class InsultBean {

    private static List<String> insults = Arrays.asList(
        "Wow, you don't look as fat as you normally do!",
        "Your face looks like a butt.",
        "You call that good posture?",
        "Does your mother know you masterbate so often?",
        "Were you born that ugly or did you grow into it?",
        "I never knew an ass and a goat could reproduce.",
        "I'm sorry, you were saying something unimportant?",
        "I didn't see you walk in, but, I sure smelled you.",
        "If I had to rank your beauty, I would jump out the nearest window.",
        "I guess all the ugly had to end up somewhere.",
        "I always wondered what sauron looked like under his mask.",
        "Congratulations! You are the 100th idiot to win nothing!",
        "You probably get all the chicks. Peep Peep.",
        "You just really are not very pretty.",
        "Get a haircut.",
        "I'm sure one day you will get a real job.",
        "When people say you are \"special\" they really mean it.");

    private static Random random = new Random();

    public String getWelcomeMessage() {
        return "Hi! How are you fatass?";
    }

    public String getInsultMessage() {
        return InsultBean.insults.get(InsultBean.random.nextInt(InsultBean.insults.size()));
    }
}
