import css from 'next/css'
import Link from 'next/link'
import React from 'react'
// import { Button, Badge } from 'rebass'

import {
    Arrow,
    Avatar,
    Badge,
    Banner,
    Block,
    Blockquote,
    Breadcrumbs,
    Button,
    ButtonCircle,
    ButtonOutline,
    Card,
    CardImage,
    Checkbox,
    Close,
    Container,
    Divider,
    Donut,
    DotIndicator,
    Dropdown,
    DropdownMenu,
    Embed,
    Fixed,
    Footer,
    Heading,
    InlineForm,
    Input,
    Label,
    LinkBlock,
    Media,
    Menu,
    Message,
    NavItem,
    Overlay,
    PageHeader,
    Panel,
    PanelFooter,
    PanelHeader,
    Pre,
    Progress,
    Radio,
    Rating,
    Section,
    SectionHeader,
    Select,
    SequenceMap,
    Slider,
    Space,
    Stat,
    Switch,
    Table,
    Text,
    Textarea,
    Toolbar,
    Tooltip,
    Base
} from 'rebass'


export default () => (
    <div>
        <h1>Next.js with Rebass</h1>

        <Button>Button</Button>

        <Badge>Badge</Badge>

        <Button>
            Arrow
            <Arrow />
        </Button>

        <Avatar src='http://lorempixel.com/64/64/cats' />

        <Banner backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'>
            <Heading size={0} children='Rebass' />
        </Banner>

        <Block
            px={2}
            borderLeft
            color='blue'>
            <Media img='http://placehold.it/128/08e/fff'>
                <Heading size={0}>Block</Heading>
                <Text>Generic box for containing things</Text>
            </Media>
        </Block>

        <Blockquote
            href='http://webtypography.net/3.1.1'
            source='Robert Bringhurst'>
            In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years. […] Use the old familiar scale, or use new scales of your own devising, but limit yourself, at first, to a modest set of distinct and related intervals.
        </Blockquote>

        <div>
            <Button children='Button' />
        </div>

        <div>
            <ButtonOutline
                rounded='left'
                children='Button' />
            <ButtonOutline
                rounded={false}
                style={{ marginLeft: -1 }}
                children='Group' />
            <Button
                rounded='right'
                style={{ marginLeft: -1 }}
                children='Button' />
        </div>

        <Card width={256}>
            <CardImage src='http://placehold.it/320/08e/fff' />
            <Heading size={3} children='Card' />
            <Text>Cats like cards too</Text>
        </Card>

        <div style={{ maxWidth: 192 }}>
            <CardImage src='http://placehold.it/320/08e/fff' />
        </div>

        <div>
            <Checkbox
                name='checkbox_1'
                label='Checkbox' />
            <Checkbox
                checked
                readOnly
                theme='success'
                name='checkbox_1'
                label='Checkbox' />
        </div>

        <Close />

        <Container>
            Container
    </Container>

        <div>
            <Divider />
            <Divider
                ml={0}
                width={128} />
        </div>

        <div>
            <DotIndicator
                length={3}
                active={0} />
        </div>

        <a href='demo'>See demo</a>

        <Dropdown>
            <Button>
                Dropdown <Arrow />
            </Button>
            <DropdownMenu open={false}>
                <NavItem children='Hello' />
                <NavItem children='Hi' />
            </DropdownMenu>
        </Dropdown>

        <a href='#Dropdown'>See Dropdown example</a>

        <Embed ratio={9 / 16}>
            <iframe
                src='https://www.youtube.com/embed/KO_3Qgib6RQ'
                allowFullScreen />
        </Embed>

        <a href='demo'>See demo</a>

        <Footer>
            Footer™ ©2016 Jxnblk
    </Footer>

        <Heading children='Heading' />

        <Heading href='#HeadingLink' children='HeadingLink' />

        <InlineForm
            name='inline_form'
            label='InlineForm' />

        <Input
            name='input_example'
            placeholder='Placeholder'
            label='Input' />

        <Label>
            Label for form elements
    </Label>

        <LinkBlock href='#LinkBlock'>
            <Media align='center' img='http://placehold.it/96/08e/fff'>
                <Heading level={3} children='LinkBlock' />
            </Media>
        </LinkBlock>

        <Media img='http://placehold.it/128/08e/fff' align='center'>
            <Heading level={3} children='Media Object' />
            <Text children='With alignment options' />
        </Media>

        <Menu>
            <NavItem children='Menu' />
            <NavItem children='NavItem' />
            <NavItem children='NavItem' />
        </Menu>

        <Message theme='success'>
            Hello Message!
      <Space auto />
            <Close />
        </Message>

        <a href='demo'>See demo</a>

        <PageHeader
            heading='Page Header'
            description='Description about the page' />

        <Panel theme='info'>
            <PanelHeader children='Panel' />
            <Text>
                Panels are great for visually separating UI, content, or data from the rest of the page.
      </Text>
            <PanelFooter children='The footer is a good place for less important information' />
        </Panel>

        <Pre children={`const pre = { preformatted: 'text' }`} />

        <Progress value={0.25} />

        <div>
            <Radio
                checked
                readOnly
                name='radio_1'
                label='Radio' />
            <Radio
                name='radio_1'
                label='Radio' />
        </div>

        <Rating value={3.5} />

        <Section>
            Section
    </Section>

        <Section>
            <SectionHeader
                heading='Section Header'
                description='With linked header' />
            Section
    </Section>

        <Select
            name='select_example'
            label='Select'
            options={[
                { value: 2, children: 'Two' },
                { value: 4, children: 'Four' },
                { value: 8, children: 'Eight' },
                { value: 16, children: 'Sixteen' },
                { value: 32, children: 'Thirty-Two' },
                { value: 64, children: 'Sixty-Four' }
            ]} />

        <SequenceMap
            steps={[
                { href: '#!', children: 'Sign In' },
                { href: '#!', children: 'Shipping Address' },
                { href: '#!', children: 'Payment Method' },
                { href: '#!', children: 'Place Order' }
            ]}
            active={1} />

        <a href='#SequenceMap' children='See SequenceMap' />

        <div>
            <Slider
                name='slider_1'
                label='Slider'
                defaultValue={3 / 8 * 100} />
            <Slider
                fill
                color='blue'
                name='slider_2'
                label='Slider with color and fill'
                readOnly
                value={5 / 8 * 100} />
        </div>

        <div>
            <Button children='Button' />
            <Space />
            <Button children='With' />
            <Space x={4} />
            <Button children='Space' />
        </div>

        <Switch />

        <Table
            headings={['Name', 'Meat', 'Vegetable', 'Carb']}
            data={[
                ['Hamburger', 'Beef', 'Onion', 'Bun'],
                ['Pizza', 'Pork', 'Tomato', 'Crust'],
                ['Corndog', 'Pork', 'Corn', 'Cornbread'],
                ['Hot Dog', 'Pork', 'Peppers', 'Bun'],
            ]} />

        <Text>Hello</Text>

        <Textarea
            name='textarea'
            label='Textarea'
            defaultValue='Hello'
            />

        <Toolbar>
            <NavItem children='Toolbar' />
            <NavItem children='NavItem' />
            <Space auto />
            <NavItem children='NavItem' />
        </Toolbar>

        <Tooltip title='Hello!'>
            <Heading level={3}>Tooltip</Heading>
        </Tooltip>

        <Base
            p={2}
            mb={3}
            color='blue'
            backgroundColor='black'
            rounded
            children='Base' />
    </div>
)
