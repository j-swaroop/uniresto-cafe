import {Component} from 'react'
import Header from '../Header'
import Tabs from '../Tabs'
import DishItem from '../DishItem'
import './index.css'

class Home extends Component {
  state = {
    data: [],
    activeTab: 'Salads and Soup',
    activeTabDishes: [],
  }

  componentDidMount() {
    this.makeApiCall()
  }

  makeApiCall = async () => {
    const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'

    const response = await fetch(url)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data[0].table_menu_list.map(item => item)
      const updatedactiveDishes = data[0].table_menu_list[0].category_dishes

      this.setState({data: updatedData, activeTabDishes: updatedactiveDishes})
    }
  }

  setActiveTab = tabDetails => {
    this.setState({
      activeTab: tabDetails.menu_category,
      activeTabDishes: tabDetails.category_dishes,
    })
  }

  renderContent = () => {
    const {data, activeTab, activeTabDishes} = this.state
    console.log(activeTabDishes)
    return (
      <>
        <ul className="tabs-container">
          {data.map(item => (
            <Tabs
              key={item.menu_category_id}
              details={item}
              setActiveTab={this.setActiveTab}
              isActive={activeTab === item.menu_category}
            />
          ))}
        </ul>

        <ul className="dishes-container">
          {activeTabDishes.map(item => (
            <DishItem key={item.dish_id} details={item} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {data} = this.state

    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-responsive-container">
            {this.renderContent()}
          </div>
        </div>
      </>
    )
  }
}

export default Home
