package macandcheese.finalproject;

import macandcheese.finalproject.repository.ItemRepository;
import macandcheese.finalproject.repository.entity.Item;
import macandcheese.finalproject.service.ItemService;
import macandcheese.finalproject.service.ItemServiceMySQL;
import org.junit.jupiter.api.*;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ItemServiceMySQLTest {

    @Mock
    ItemRepository itemRepository;

    ItemService itemService;
    Item itemMock;

    @BeforeEach
    public void setup()
    {
        itemService = new ItemServiceMySQL( itemRepository );
        itemMock = Mockito.mock(Item.class);
    }

    @Test
    public void saveCallsItemsRepositorySave()
    {
        itemService.save( itemMock );
        Mockito.verify( itemRepository ).save( itemMock );
    }

    @Test
    public void deletesCallItemsRepositoryDelete()
    {
        itemMock.setId(40);
        itemMock.setName("Test Item");
        itemService.save(itemMock);
        itemService.delete(itemMock.getId());
        Mockito.verify(itemRepository).deleteById(itemMock.getId());
    }

    @Test
    public void callItemsRepositoryGetAll()
    {
        itemMock.setId(40);
        itemMock.setName("Test Item");
        itemService.save(itemMock);
        List<Item> result = itemService.all();
        Mockito.verify( itemRepository ).findAll();
    }

    @Test
    public void findItemsRepositoryFindById()
    {
        itemMock.setId(40);
        itemMock.setName("Test Item");
        when(itemRepository.findById(itemMock.getId())).thenReturn(Optional.of(itemMock));

        itemService.save(itemMock);
        Item expected = itemService.findById(itemMock.getId());
        assertThat(expected).isSameAs(itemMock);
        Mockito.verify( itemRepository ).findById(itemMock.getId());
    }

}