package macandcheese.finalproject.repository.entity;


import macandcheese.finalproject.controller.dto.ItemDTO;


import javax.persistence.*;

@Entity
@Table(name = "productItem")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private double price;
    private Integer quantity;
    private String category;
    private String imageURL;

    public Item(){}

    public Item(ItemDTO itemDto) {

        this.name = itemDto.getName();
        this.description = itemDto.getDescription();
        this.price = itemDto.getPrice();
        this.quantity = itemDto.getQuantity();
        this.category = itemDto.getCategory();
        this.imageURL = itemDto.getImageUrl();
    }

    public Integer getId(){ return id;}
    public void setId(Integer id){ this.id = id; }

    public String getName() { return name; }
    public void setName( String name ) {this.name = name;}

    public String getDescription()  {return description;}
    public void setDescription( String description ) {this.description = description;}

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public Integer getQuantity()  {return quantity;}
    public void setQuantity( Integer quantity ) {this.quantity = quantity;}

    public String getCategory()  {return category;}
    public void setCategory( String category ) {this.category = category;}

    public String getImageUrl() {return imageURL;}
    public void setImageUrl( String imageURL ) {this.imageURL = imageURL;}

    @Override
    public String toString()
    {
        return "Item{" + "id=" + id + ", name='" + name + '\'' + ", description='" + description + '\''
                + ", price='" + price + '\'' + ", quantity='" + quantity + '\'' + ", category='" + category + '\''
                + ", imageUrl='" + imageURL + '\'' + '}';
    }


}
