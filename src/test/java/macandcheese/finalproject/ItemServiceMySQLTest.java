package macandcheese.finalproject;

import macandcheese.finalproject.repository.*;
import macandcheese.finalproject.repository.entity.Item;
import macandcheese.finalproject.service.*;
import org.junit.jupiter.api.*;
import org.mockito.*;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ItemServiceMySQLTest {
    @Mock
    ItemRepository itemRepository;

    ItemService itemService;
    Item itemMock;

    @BeforeAll
    public void setup()
    {
        itemService = new ItemServiceMySQL( itemRepository );
        itemMock = Mockito.mock(Item.class);
    }

    @Test
    public void saveCallsItemsRepositorySave()
    {
        Mockito.reset(itemRepository);
        itemService.save(itemMock);                     //To test
        Mockito.verify(itemRepository).save(itemMock);  //To validate
    }


}
