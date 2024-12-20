// TODO

//mine
const { useState } = React;

const GroceryListItem = (props) => {

  const [isHovered, setIsHovered] = useState(false);

  const style = {
    fontWeight: isHovered ? 'bold' : 'normal',
  };

  return (
    <li style = {style} onMouseEnter = {() => setIsHovered(isHovered)} onMouseLeave = {() => setIsHovered(!isHovered)}>{props.groceryListItem}</li>
  );
};

const GroceryList = () => {
  const groceryItems = ['Chicken Nuggets', 'Coke Zero', 'Protein Powder', 'Asparagus'];

  return (
    <ul>
      {groceryItems.map((item) => (
        <GroceryListItem groceryListItem = {item} />
      ))}
    </ul>
  )
};


ReactDOM.render(
  <GroceryList />,
  document.getElementById('app')
)

// const Cucumbers = () => (<li>Cucumbers</li>);
// const Kale = () => (<li>Kale</li>);

// const GroceryList = () =>
//   (  <ul>
//       <GroceryListItem groceryListItem ={'Chicken Nuggets'}/>
//      </ul>);