package macandcheese.finalproject.controller;

import macandcheese.finalproject.component.FileUploadUtil;
import macandcheese.finalproject.controller.dto.ItemDTO;
import macandcheese.finalproject.repository.entity.Item;
import macandcheese.finalproject.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/item")
public class ItemController {

    @Value("${image.folder}")
    private String imageFolder;

    final ItemService itemService;

    public ItemController( @Autowired ItemService itemService )
    {
        this.itemService = itemService;
    }

    @CrossOrigin
    @GetMapping( "/all" )
    public Iterable<Item> getItems()
    {
        return itemService.all();
    }

    @CrossOrigin
    @GetMapping( "/{id}" )
    public Item findItemById( @PathVariable Integer id )
    {
        return itemService.findById( id );
    }

    @CrossOrigin
    @DeleteMapping( "/{id}" )
    public void delete( @PathVariable Integer id )
    {
        itemService.delete( id );
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(  @RequestParam(name="productName", required = true) String name,
                       @RequestParam(name="productDesc", required = true) String description,
                       @RequestParam(name="imageUrl", required = true) String imageUrl, //is this name correct?
                       @RequestParam(name="quantity", required = true) Integer quantity,
                       @RequestParam(name="categories", required = true) String categories, //multiple input possible
                       @RequestParam(name="price", required = true) double price,
                       @RequestParam("image") MultipartFile multipartFile) throws IOException {

        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        FileUploadUtil.saveFile(imageFolder, fileName, multipartFile);

        String fullPath = imageFolder + '/' + imageUrl;
        ItemDTO itemDto = new ItemDTO(name, description, price, quantity, categories, fullPath);
        itemService.save(new Item(itemDto));
    }



}

