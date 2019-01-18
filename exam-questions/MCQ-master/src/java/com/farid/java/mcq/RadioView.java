package com.farid.java.mcq;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.bean.ViewScoped;

@ManagedBean
@ViewScoped
public class RadioView {

    private int rans = 0;
    private int fams = 0;

    private String[] ans = new String[10];

    private List<CoreJava> mcq = new ArrayList<>();

    @PostConstruct
    public void init() {
        createMcq();
    }

    public void createMcq() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mcq", "root", "farid");
            PreparedStatement stm = con.prepareStatement("select * from qcorejava");
            ResultSet rs = stm.executeQuery();
            while (rs.next()) {
                mcq.add(new CoreJava(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6), rs.getString(7), rs.getString(8)));

            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void ansShow() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mcq", "root", "farid");
            PreparedStatement stm = con.prepareStatement("select * from qcorejava");
            ResultSet rs = stm.executeQuery();
            int i = 0;
            int r = 1;
            int f = 1;
            while (rs.next()) {
                if (rs.getString(7).matches(ans[i])) {
                    setRans(r);
                    r++;
                } else {
                    setFams(f);
                    f++;
                }
                i++;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<CoreJava> getMcq() {
        return mcq;
    }

    public void setMcq(List<CoreJava> mcq) {
        this.mcq = mcq;
    }

    public static void main(String[] args) {
        RadioView r = new RadioView();
        r.createMcq();
    }

    public String[] getAns() {
        return ans;
    }

    public void setAns(String[] ans) {
        this.ans = ans;
    }

    public int getRans() {
        return rans;
    }

    public void setRans(int rans) {
        this.rans = rans;
    }

    public int getFams() {
        return fams;
    }

    public void setFams(int fams) {
        this.fams = fams;
    }

}
