"use client"

import { ResponsivePie } from "@nivo/pie"

type props = {
    data:any
}

const ResponsivePieCharts = ({data}:props) => {
  return (
    <ResponsivePie
    data={data}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={{ scheme: 'pastel2' }}
    borderWidth={1}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.2
            ]
        ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextOffset={0}
    arcLinkLabelsTextColor="#ffffff"
    arcLinkLabelsOffset={-21}
    arcLinkLabelsDiagonalLength={36}
    arcLinkLabelsStraightLength={8}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsRadiusOffset={0.55}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                2
            ]
        ]
    }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'ruby'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'c'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'go'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'python'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'scala'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'lisp'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'elixir'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'javascript'
            },
            id: 'lines'
        }
    ]}
    legends={[
        {
            anchor: 'bottom',
            itemTextColor:"white",
            direction: 'row',
            justify: false,
            translateX: -2,
            translateY: 70,
            itemWidth: 95,
            itemHeight: 20,
            itemsSpacing: 0,
            symbolSize: 23,
            itemDirection: 'left-to-right'
        }
    ]}
/>
  )
}

export default ResponsivePieCharts