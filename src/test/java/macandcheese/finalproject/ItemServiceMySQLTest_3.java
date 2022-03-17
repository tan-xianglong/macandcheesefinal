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
public class ItemServiceMySQLTest_3 {

    @Mock
    ItemRepository itemRepository;

    ItemService itemService;

    @BeforeAll
    public void setup()
    {
        itemService = new ItemServiceMySQL( itemRepository );
    }

    @Test
    public void saveCallsItemsRepositorySave()
    {
        Item itemMock = mock( Item.class );
        itemService.save( itemMock );
        verify( itemRepository ).save( itemMock );
    }

    @Test
    public void findById()
    {
        int id = 10;
        Item mockItem = mock( Item.class );
        when( itemRepository.findById( id ) ).thenReturn(Optional.of(mockItem));
        itemService.findById( id );
        verify( itemRepository ).findById( id );
    }
}