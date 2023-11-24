export const tableOption = {
  searchMenuSpan: 6,
  columnBtn: false,
  border: true,
  selection: true,
  index: false,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 200,
  align: 'center',
  refreshBtn: true,
  searchSize: 'mini',
  addBtn: false,
  editBtn: false,
  delBtn: false,
  viewBtn: false,
  props: {
    label: 'label',
    value: 'value'
  },
  column: [{
    width: 240,
    label: '产品名字',
    prop: 'prodName',
    search: true
  }, {
    label: '商品原价',
    prop: 'oriPrice'
  }, {
    label: '商品现价',
    prop: 'price'
  }, {
    label: '商品库存',
    prop: 'totalStocks'
  }, {
    label: '产品图片',
    prop: 'pic',
    type: 'upload',
    width: 180,
    listType: 'picture-img'

  }, {
    label: '产品状态',
    prop: 'status',
    search: true,
    slot: true,
    type: 'select',
    width: 120,
    dicData: [
      {
        label: '未上架',
        value: 0
      }, {
        label: '已上架',
        value: 1
      }
    ]
  }]
}