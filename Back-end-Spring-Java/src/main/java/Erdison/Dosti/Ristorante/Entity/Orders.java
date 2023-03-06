package Erdison.Dosti.Ristorante.Entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "ordini")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private LocalDate localDate;

    @Column(columnDefinition = "BOOLEAN")
    private boolean isPayed;
    private int seats;



   @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "food_has_order", joinColumns = {
            @JoinColumn(name = "order_id",foreignKey = @ForeignKey(name = "FK_food_order"))}, inverseJoinColumns = {
            @JoinColumn(name = "food_id",foreignKey = @ForeignKey(name = "FK_order_food"))})
    private List<Foods> food_id;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "drinks_has_order", joinColumns = {
            @JoinColumn(name = "order_id",foreignKey = @ForeignKey(name = "FK_drink_order"))}, inverseJoinColumns = {
            @JoinColumn(name = "drink_id",foreignKey = @ForeignKey(name = "FK_order_drink"))})
    private List<Drinks> drink_id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="table_id")
    @JsonIgnore
    private Tables table_id;

    /*Get & Set*/

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getLocalDate() {
        return localDate;
    }

    public void setLocalDate(LocalDate localDate) {
        this.localDate = localDate;
    }

    public boolean isPayed() {
        return isPayed;
    }

    public void setPayed(boolean payed) {
        isPayed = payed;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public List<Foods> getFood_id() {
        return food_id;
    }

    public void setFood_id(List<Foods> food_id) {
        this.food_id = food_id;
    }

    public List<Drinks> getDrink_id() {
        return drink_id;
    }

    public void setDrink_id(List<Drinks> drink_id) {
        this.drink_id = drink_id;
    }

    public Tables getTable_id() {
        return table_id;
    }

    public void setTable_id(Tables table_id) {
        this.table_id = table_id;
    }
}
