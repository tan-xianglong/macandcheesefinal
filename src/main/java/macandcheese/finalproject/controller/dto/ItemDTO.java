package macandcheese.finalproject.controller.dto;

public class ItemDTO {

    private String name;
    private String description;
    private double price;
    private Integer quantity;
    private String category;
    private String imageURL;



    public ItemDTO( String name, String description, double price, int quantity, String category, String imageUrl)
    {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
        this.imageURL = imageUrl;

    }

    public String getName() {return name;}
    public void setName( String name ) {this.name = name;}

    public String getDescription()  {return description;}
    public void setDescription( String description ) {this.description = description;}

    public void setPrice(double price) { this.price = price; }
    public double getPrice() { return price; }

    public Integer getQuantity()  {return quantity;}
    public void setQuantity( Integer quantity ) {this.quantity = quantity;}

    public String getCategory()  {return category;}
    public void setCategory( String category ) {this.category = category;}

    public String getImageUrl() {return imageURL;}
    public void setImageUrl( String imageUrl ) {this.imageURL = imageUrl;}



}
