/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.farid.java.mcq;

public class CoreJava {

    private int qno;
    private String question;
    private String A;
    private String B;
    private String C;
    private String D;
    private String answer;
    private String qmarkers;

    public CoreJava(int qno, String question, String A, String B, String C, String D, String answer, String qmarkers) {
        this.qno = qno;
        this.question = question;
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
        this.answer = answer;
        this.qmarkers = qmarkers;
    }

    public CoreJava() {
    }

    public String getQmarkers() {
        return qmarkers;
    }

    public void setQmarkers(String qmarkers) {
        this.qmarkers = qmarkers;
    }

    public int getQno() {
        return qno;
    }

    public void setQno(int qno) {
        this.qno = qno;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getA() {
        return A;
    }

    public void setA(String A) {
        this.A = A;
    }

    public String getB() {
        return B;
    }

    public void setB(String B) {
        this.B = B;
    }

    public String getC() {
        return C;
    }

    public void setC(String C) {
        this.C = C;
    }

    public String getD() {
        return D;
    }

    public void setD(String D) {
        this.D = D;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

}
