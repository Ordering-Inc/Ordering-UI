import React, { useState, useEffect } from 'react'
import { MetaFields as MetaFieldsController, useLanguage } from 'ordering-components'
import { Alert, SpinnerLoader } from '../../Shared'
import Skeleton from 'react-loading-skeleton'
import BsTrash from '@meronex/icons/bs/BsTrash'
import BsPlusSquare from '@meronex/icons/bs/BsPlusSquare'
// import { Select } from '../../../styles/Select/FirstSelect'
import { Select } from '../../../styles/Select/DashboardSelect'
import { useForm } from 'react-hook-form'
import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'
import {
  WrapMetaFields,
  MetaTitle,
  MetaContainer,
  RoundBorder,
  NoMetaField,
  MetaAddForm,
  MetaAddContainer,
  SkeletonItem,
  WrapperSpinnerLoader
} from './styles'

const MetaFieldsUI = (props) => {
  const {
    orderId,
    metaFieldsList,
    actionState,
    handleDeleteMetaField,
    handeAddMetaField
  } = props
  const [, t] = useLanguage()
  const { handleSubmit, register, errors } = useForm()

  const [alertState, setAlertState] = useState({ open: false, content: [] })
  const [selectedMetaKey, setSelectedMetaKey] = useState('text')
  const [selectedBoolean, setSelectedBoolean] = useState('1')
  const [metaKey, setMetaKey] = useState('')
  const [metaValue, setMetaValue] = useState('')
  const [json, setJson] = useState({})
  const metaTypeOptions = [
    {
      value: 'integer',
      content: t('INTEGER', 'integer')
    },
    {
      value: 'decimal',
      content: t('DECIMAL', 'decimal')
    },
    {
      value: 'boolean',
      content: t('BOOLEAN', 'boolean')
    },
    {
      value: 'text',
      content: t('TEXT', 'text')
    },
    {
      value: 'json',
      content: t('JSON', 'json')
    }
  ]
  const booleanOptions = [
    {
      value: '1',
      content: t('TRUE', 'true')
    },
    {
      value: '0',
      content: t('FALSE', 'false')
    }
  ]
  const closeAlert = () => {
    setAlertState({
      open: false,
      content: []
    })
  }

  const handleChangeJson = (v) => {
    setJson(v)
  }

  const onSubmit = () => {
    let value
    if (selectedMetaKey === 'json') {
      value = JSON.stringify(json)
    } else if (selectedMetaKey === 'boolean') {
      value = selectedBoolean
    } else {
      value = metaValue
    }
    handeAddMetaField({
      key: metaKey,
      order_id: orderId,
      value: value,
      value_type: selectedMetaKey
    })
  }

  useEffect(() => {
    if (document.getElementById('meta_key')) {
      document.getElementById('meta_key').value = ''
    }
    if (document.getElementById('meta_value')) {
      document.getElementById('meta_value').value = ''
    }
  }, [selectedMetaKey])

  useEffect(() => {
    if (!actionState.loading && actionState.result?.error) {
      setAlertState({
        open: true,
        content: actionState.result?.result || [t('ERROR')]
      })
    }
    if (!actionState.loading && !actionState.result?.error) {
      if (document.getElementById('meta_key')) {
        document.getElementById('meta_key').value = ''
      }
      if (document.getElementById('meta_value')) {
        document.getElementById('meta_value').value = ''
      }
    }
  }, [actionState])

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map((error) => error.message)
      })
    }
  }, [errors])

  return (
    <>
      {metaFieldsList.loading ? (
        <WrapMetaFields>
          {[...Array(10).keys()].map(i => (
            <SkeletonItem key={i}>
              <Skeleton width={50} height={30} />
              <Skeleton width={50} height={30} />
              <Skeleton width={150} height={30} />
              <Skeleton width={25} height={30} />
            </SkeletonItem>
          ))}
        </WrapMetaFields>
      ) : (
        <WrapMetaFields>
          <MetaTitle>
            {t('CUSTOM_FIELDS', 'Custom Fields')}
          </MetaTitle>
          {metaFieldsList.metaFields.length > 0 ? (
            <>
              {metaFieldsList.metaFields.map(metaField => (
                <MetaContainer key={metaField.id}>
                  <div className='meta_type'>
                    {metaField.value_type}
                  </div>
                  <div className='meta_key'>
                    <RoundBorder>{metaField.key}</RoundBorder>
                  </div>
                  <div className='meta_value'>
                    <RoundBorder>
                      {metaField.value_type === 'boolean' ? (
                        <>
                          {metaField.value === '0' ? t('FALSE', 'fase') : t('TRUE', 'true')}
                        </>
                      ) : (
                        <>
                          {metaField.value}
                        </>
                      )}
                    </RoundBorder>
                    <BsTrash onClick={() => handleDeleteMetaField(metaField.id)} />
                  </div>
                </MetaContainer>
              ))}
            </>
          ) : (
            <NoMetaField>{t('NO_METAFIELD', 'No MetaField')}</NoMetaField>
          )}
          <MetaAddForm
            onSubmit={handleSubmit(onSubmit)}
          >
            <MetaAddContainer>
              <div className='meta_type'>
                <Select
                  defaultValue={selectedMetaKey || 'text'}
                  options={metaTypeOptions}
                  onChange={(key) => setSelectedMetaKey(key)}
                />
              </div>
              <div className='meta_key'>
                <input
                  type='text'
                  name='key'
                  id='meta_key'
                  // value={metaKey}
                  onChange={(e) => setMetaKey(e.target.value)}
                  placeholder={t('KEY', 'key')}
                  ref={register({
                    required: t(
                      'VALIDATION_ERROR_REQUIRED',
                      'Key is required'
                    ).replace('_attribute_', t('KEY', 'Key'))
                  })}
                />
              </div>
              <div className='meta_value'>
                {selectedMetaKey === 'text' && (
                  <input
                    type='text'
                    name='value'
                    id='meta_value'
                    // value={metaValue}
                    onChange={(e) => setMetaValue(e.target.value)}
                    placeholder={t('VALUE', 'Vlue')}
                    ref={register({
                      required: t(
                        'VALIDATION_ERROR_REQUIRED',
                        'Value is required'
                      ).replace('_attribute_', t('VALUE', 'Vlue'))
                    })}
                  />
                )}
                {selectedMetaKey === 'integer' && (
                  <input
                    type='text'
                    name='value'
                    // value={metaValue}
                    onChange={(e) => setMetaValue(e.target.value)}
                    placeholder={t('VALUE', 'Vlue')}
                    ref={register({
                      required: t(
                        'VALIDATION_ERROR_REQUIRED',
                        'Value is required'
                      ).replace('_attribute_', t('VALUE', 'Vlue')),
                      pattern: {
                        value: /^\d+$/,
                        message: t(
                          'VALIDATION_ERROR_INTEGER',
                          'Invalid integer'
                        ).replace('_attribute_', t('VALUE', 'Vlue'))
                      }
                    })}
                  />
                )}
                {selectedMetaKey === 'decimal' && (
                  <input
                    type='text'
                    name='value'
                    // value={metaValue}
                    onChange={(e) => setMetaValue(e.target.value)}
                    placeholder={t('VALUE', 'Vlue')}
                    ref={register({
                      required: t(
                        'VALIDATION_ERROR_REQUIRED',
                        'Value is required'
                      ).replace('_attribute_', t('VALUE', 'Vlue')),
                      pattern: {
                        value: /^[+-]?\d*\.?\d+(?:[Ee][+-]?\d+)?$/,
                        message: t(
                          'VALIDATION_ERROR_DECIMAL',
                          'Invalid decimal'
                        ).replace('_attribute_', t('VALUE', 'Vlue'))
                      }
                    })}
                  />
                )}
                {selectedMetaKey === 'boolean' && (
                  <Select
                    className='select-input'
                    defaultValue={selectedBoolean || '1'}
                    options={booleanOptions}
                    onChange={(val) => setSelectedBoolean(val)}
                  />
                )}
                {selectedMetaKey === 'json' && (
                  <div className='json_editor'>
                    <Editor
                      value={json}
                      onChange={(v) => handleChangeJson(v)}
                    />
                  </div>
                )}
                <button
                  type='submit'
                >
                  <BsPlusSquare />
                </button>
              </div>
            </MetaAddContainer>
          </MetaAddForm>
          {actionState.loading && (
            <WrapperSpinnerLoader>
              <SpinnerLoader />
            </WrapperSpinnerLoader>
          )}
        </WrapMetaFields>
      )}
      <Alert
        title={t('ERROR')}
        content={alertState.content}
        acceptText={t('ACCEPT')}
        open={alertState.open}
        onClose={() => closeAlert()}
        onAccept={() => closeAlert()}
        closeOnBackdrop={false}
      />
    </>
  )
}

export const OrderMetaFields = (props) => {
  const MetaFieldsProps = {
    ...props,
    asDashboard: true,
    UIComponent: MetaFieldsUI
  }
  return <MetaFieldsController {...MetaFieldsProps} />
}
