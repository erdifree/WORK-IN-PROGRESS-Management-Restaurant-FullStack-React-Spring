package Erdison.Dosti.Ristorante.DTO;

import Erdison.Dosti.Ristorante.Entity.Drinks;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class OrderDTO {


    private boolean payed;

    private int table_id;



    public OrderDTO( boolean payed,  int table_id ) {
        this.payed = payed;
        this.table_id = table_id;
    }

    public OrderDTO() {
    }

    public boolean isPayed() {
        return payed;
    }

    public void setPayed(boolean payed) {
        this.payed = payed;
    }

    public int getTable_id() {
        return table_id;
    }

    public void setTable_id(int table_id) {
        this.table_id = table_id;
    }
}
