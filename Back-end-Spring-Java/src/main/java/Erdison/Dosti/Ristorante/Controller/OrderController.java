package Erdison.Dosti.Ristorante.Controller;


import Erdison.Dosti.Ristorante.DTO.OrderDTO;
import Erdison.Dosti.Ristorante.Entity.Drinks;
import Erdison.Dosti.Ristorante.Entity.Foods;
import Erdison.Dosti.Ristorante.Entity.Orders;
import Erdison.Dosti.Ristorante.Entity.Tables;
import Erdison.Dosti.Ristorante.Repository.DrinksRepository;
import Erdison.Dosti.Ristorante.Repository.FoodsRepository;
import Erdison.Dosti.Ristorante.Repository.OrderRepository;
import Erdison.Dosti.Ristorante.Repository.TableRepository;
import jakarta.persistence.Table;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api1/orders")
@CrossOrigin
public class OrderController {

    @Autowired
    OrderRepository orderRepository;
    @Autowired
    TableRepository tableRepository;
    @Autowired
    FoodsRepository foodsRepository;
    @Autowired
    DrinksRepository drinksRepository;
    @GetMapping
    public List<Orders> getAll() {
        return orderRepository.findAll();
    }

    @GetMapping
    public List<Orders> getOrderssByispayed(@RequestParam (name="flag",required = false)boolean str) {
        List<Orders> result = orderRepository.findAll();
        List<Orders> ordersList= new ArrayList<>();
        if (result.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, ("Orders not found"));
        } else {
            for (Orders order : result) {
                if (order.isPayed() == str) {
                    ordersList.add(order);
                 
                }
            }
            return ordersList;
        }
    }

    @PostMapping("/table/{id}")
    public ResponseEntity<Object> create(@RequestBody Orders orders,@PathVariable Integer id) {
        Optional<Tables> result = tableRepository.findById(id);
        if (result.isPresent()) {
            Tables table=result.get();
            table.setId(id);
            Orders newOrder = new Orders();
            newOrder.setTable_id(table);
            newOrder.setPayed(orders.isPayed());
            newOrder.setLocalDate(orders.getLocalDate());
            newOrder.setSeats(orders.getSeats());
            if (orders.getFood_id().isEmpty()&&orders.getDrink_id().isEmpty()) {
                return ResponseEntity.ok("Per Creare un ordine devi selezionare  Food or Drink");
            }
            newOrder.setDrink_id(orders.getDrink_id());
            newOrder.setFood_id(orders.getFood_id());
            orderRepository.save(newOrder);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,("Table  not found")) ;
        }
        return ResponseEntity.ok("Ordine Creato!!!!");
    }



    @PutMapping("/update/{id}")
    public ResponseEntity<Object> updateOrder(@PathVariable Integer id, @RequestBody Orders orders ) {
        Optional<Orders> result= orderRepository.findById(id);
        if(!result.isEmpty()){
            Orders newOrder=result.get();
            newOrder.setId(id);
            newOrder.setPayed(orders.isPayed());
            newOrder.setSeats(orders.getSeats());
            newOrder.setTable_id(orders.getTable_id());
            newOrder.setDrink_id(orders.getDrink_id());
            newOrder.setFood_id(orders.getFood_id());
            orderRepository.save(newOrder);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Dish Not Found");
        }
        return ResponseEntity.ok("Order updated");
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deliteOrder(@PathVariable Integer id){
        Optional<Orders> result= orderRepository.findById(id);
        if(!result.isEmpty()){
            Orders orders=result.get();
            orders.setTable_id(null);
            orders.setDrink_id(null);
            orders.setFood_id(null);
            orderRepository.delete(orders);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Dish Not Found");
        }
        return ResponseEntity.ok("Order deleted");
    }

}
