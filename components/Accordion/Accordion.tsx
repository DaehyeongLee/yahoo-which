import { FC, useState } from 'react'
import Typography from '../Typography/Typography'

const angleDownIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.2293 18.2267C11.6522 18.6496 12.3478 18.6496 12.7707 18.2267L23.6829 7.31454C24.1057 6.89169 24.1057 6.19604 23.6829 5.77319C23.26 5.35034 22.5644 5.35034 22.1415 5.77319L12 15.9147L1.85848 5.77319C1.43564 5.35034 0.739983 5.35034 0.317136 5.77319C-0.105712 6.19604 -0.105712 6.89169 0.317136 7.31454L11.2293 18.2267Z"
      fill="currentColor"
    />
  </svg>
)

const angleUpIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.2293 5.77319C11.6522 5.35034 12.3478 5.35034 12.7707 5.77319L23.6829 16.6854C24.1057 17.1082 24.1057 17.8039 23.6829 18.2267C23.26 18.6496 22.5644 18.6496 22.1415 18.2267L12 8.08521L1.85848 18.2267C1.43564 18.6496 0.739983 18.6496 0.317136 18.2267C-0.105712 17.8039 -0.105712 17.1082 0.317136 16.6854L11.2293 5.77319Z"
      fill="currentColor"
    />
  </svg>
)

interface MenuItem {
  name: string
  price: number
}

interface Category {
  name: string
  items: MenuItem[]
}

interface AccordionProps {
  data: Category
  isFirst: boolean
}

const Accordion: FC<AccordionProps> = ({ data, isFirst }) => {
  const [open, setOpen] = useState<Boolean>(false)

  return (
    <div>
      <div
        className={`flex flex-col px-5 py-5 ${isFirst ? 'border-t ' : ''} border-b border-gray-300`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="h6">{data?.name}</Typography>
            <Typography variant="p">{`${data?.items.reduce(
              (min, item) => Math.min(min, item.price),
              Infinity,
            )} ~ ${data?.items.reduce((max, item) => Math.max(max, item.price), 0)}원`}</Typography>
          </div>
          <div>{open ? angleUpIcon : angleDownIcon}</div>
        </div>
      </div>
      {open && (
        <div>
          {data?.items.map((item, index) => (
            <div key={index} className="flex flex-col px-5 py-5 border-b border-gray-300 bg-neutral-100">
              <div>
                <Typography variant="h6">{item?.name}</Typography>
                <Typography variant="p" className="text-orange-500">
                  {item?.price}원
                </Typography>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Accordion
