package Erdison.Dosti.Ristorante.DTO;

import Erdison.Dosti.Ristorante.Entity.Drinks;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class OrderDTO {

    private LocalDate localDate;
    private boolean payed;
    private int seats;
    private int table_id;
    private List<Drinks> drinksList= new ArrayList<>();


    public OrderDTO(LocalDate localDate, boolean payed, int seats, int table_id, List<Drinks> drinksList) {
        this.localDate = localDate;
        this.payed = payed;
        this.seats = seats;
        this.table_id = table_id;
        this.drinksList = drinksList;
    }

    public LocalDate getLocalDate() {
        return localDate;
    }

    public void setLocalDate(LocalDate localDate) {
        this.localDate = localDate;
    }

    public boolean isPayed() {
        return payed;
    }

    public void setPayed(boolean payed) {
        this.payed = payed;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public int getTable_id() {
        return table_id;
    }

    public void setTable_id(int table_id) {
        this.table_id = table_id;
    }
}
