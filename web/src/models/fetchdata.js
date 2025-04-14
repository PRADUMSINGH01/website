import { firestore } from '@/models/Firebase';
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";

async function fetchData(collectionName, conditions = [], order = null) {
    try {
      let q = collection(firestore, collectionName);
  
      // Apply conditions (where clauses)
      if (conditions.length > 0) {
        conditions.forEach((condition) => {
          q = query(q, where(condition.field, condition.operator, condition.value));
        });
      }
  
      // Apply order
      if (order) {
        q = query(q, orderBy(order.field, order.direction));
      }
  
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array in case of an error
    }
  }

  export default fetchData