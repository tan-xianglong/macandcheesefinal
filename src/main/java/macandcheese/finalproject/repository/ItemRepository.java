package macandcheese.finalproject.repository;

import macandcheese.finalproject.repository.entity.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Integer> {
}
