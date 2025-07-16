import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import ServiceCards from '../components/ServiceCard'
import DiscountProducts from '../components/Discountproducts'
import NewArrivals from '../components/NewArrivals'

export default function Home() {
  return (
    <div>
      <HomeCarousel/>
      <ServiceCards/>
      <DiscountProducts/>
      <NewArrivals/>
    </div>
  )
}
