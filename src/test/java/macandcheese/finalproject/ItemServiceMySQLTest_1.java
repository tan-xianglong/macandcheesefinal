package macandcheese.finalproject;

import macandcheese.finalproject.repository.ItemRepository;
import macandcheese.finalproject.repository.entity.Item;
import macandcheese.finalproject.service.ItemService;
import macandcheese.finalproject.service.ItemServiceMySQL;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

import static org.mockito.Mockito.*;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ItemServiceMySQLTest_1 {
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
        itemService.save( itemMock );
        verify( itemRepository ).save( itemMock );
    }

    @Test
    public void findById()
    {
        int itemId = 3;
        Mockito.reset(itemRepository);
        when( itemRepository.findById( itemId ) ).thenReturn( Optional.of( itemMock ) );
        itemService.findById( itemId );
        verify( itemRepository ).findById( itemId );
    }
}
