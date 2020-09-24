import React, { useState } from 'react'
import { Modal } from '../Modal'
import { Container, UpsellingContainer, Item, Image, Details } from './styles'
import { Button } from '../../styles/Buttons'

export const UpsellingPage = (props) => {
  const { open } = props
  const [modalOpen, setModalOpen] = useState(open)

  return (
    <Modal title='Do you want something else?' open={modalOpen} onClose={() => setModalOpen(false)}>
      <Container>
        <UpsellingContainer>
          <Item>
            <Image>
              <img src='https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/09/1140-diet-soda-study-esp.imgcache.rev6208242c91ca52f74dd56213cd8eb720.jpg' />
            </Image>
            <Details>
              <p>SodaCombo</p>
              <p>$29.00</p>
              <div>
                <Button color='primary'>Add</Button>
              </div>
            </Details>
          </Item>
          <Item>
            <Image>
              <img src='https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/09/1140-diet-soda-study-esp.imgcache.rev6208242c91ca52f74dd56213cd8eb720.jpg' />
            </Image>
            <Details>
              <p>SodaCombo</p>
              <p>$29.00</p>
              <div>
                <Button color='primary'>Add</Button>
              </div>
            </Details>
          </Item>
          <Item>
            <Image>
              <img src='https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/09/1140-diet-soda-study-esp.imgcache.rev6208242c91ca52f74dd56213cd8eb720.jpg' />
            </Image>
            <Details>
              <p>SodaCombo</p>
              <p>$29.00</p>
              <div>
                <Button color='primary'>Add</Button>
              </div>
            </Details>
          </Item>
          <Item>
            <Image>
              <img src='https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/09/1140-diet-soda-study-esp.imgcache.rev6208242c91ca52f74dd56213cd8eb720.jpg' />
            </Image>
            <Details>
              <p>SodaCombo</p>
              <p>$29.00</p>
              <div>
                <Button color='primary'>Add</Button>
              </div>
            </Details>
          </Item>
        </UpsellingContainer>
        <Button color='secondary' outline>
          No, Thanks
        </Button>
      </Container>
    </Modal>
  )
}
