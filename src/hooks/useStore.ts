import { useStateMachine } from 'little-state-machine'
import { useCallback, useEffect, useMemo } from 'react'

const setState = (state: any, payload = {}) => {
  return {
    ...state,
    ...payload,
  }
}

export function removeSelected(state: any, id: any) {
  const item = state.selectedItem.find((x: any) => x.id === id)
  return {
    ...state,
    selectedItem: state.selectedItem.filter((x: any) => x.id !== id),
    all: [...state.all, item].sort((a: any, b: any) => b.price - a.price),
  }
}

export function addSelected(state: any, id: any) {
  const item = state.all.find((x: any) => x.id === id)
  return {
    ...state,
    selectedItem: [...state.selectedItem, item],
    all: state.all.filter((x: any) => x.id !== id),
  }
}

export function useItems() {
  const { actions, state } = useStateMachine({
    addSelected,
    removeSelected,
    setState,
  })

  const csgo = useMemo(
    () =>
      state.csgo.reduce(
        (acc: any, next: any, idx: any) => [
          ...acc,
          {
            id: `csgo:${idx}`,
            name: (next.name.split('|')[0] || '').trim(),
            weapon: (next.name.split('|')[1] || '').trim(),
            isStatTrak: next.name.includes('StatT'),
            image: next.image,
            float: next.float,
            type: next.type,
            exterior: next.exterior,
            price: next.price,
            duplicate: next.duplicate ? next.duplicate.length : 0,
          },
        ],
        []
      ),
    [state.csgo]
  )

  const dota = useMemo(
    () =>
      state.dota.reduce(
        (acc: any, next: any, idx: any) => [
          ...acc,
          {
            id: `dota:${idx}`,
            name: next.name,
            image: next.image,
            rarity: next.rarity,
            hero: next.hero,
            type: next.type,
            price: next.price,
            duplicate: next.duplicate ? next.duplicate.length : 0,
          },
        ],
        []
      ),
    [state.dota]
  )

  const tf2 = useMemo(
    () =>
      state.tf2.reduce(
        (acc: any, next: any, idx: any) => [
          ...acc,
          {
            id: `tf2:${idx}`,
            price: next.price,
            class: next.class,
            type: next.type,
            name: next.name,
            quality: next.quality,
            image: next.image,
            duplicate: next.duplicate ? next.duplicate.length : 0,
          },
        ],
        []
      ),
    [state.tf2]
  )

  const allItems = useMemo(
    () =>
      [...tf2, ...csgo, ...dota].sort((a: any, b: any) => b.price - a.price),
    [tf2, csgo, dota]
  )

  const selectedItems = state.selectedItem

  const selectedItemsTotal = useMemo(
    () =>
      selectedItems
        .reduce((acc: any, next: any) => acc + next.price, 0)
        .toFixed(2),
    [selectedItems]
  )

  const addItem = useCallback(
    (id) => {
      actions.addSelected(id)
    },
    //eslint-disable-next-line
    [state.all]
  )

  const removeItem = useCallback(
    (id) => {
      actions.removeSelected(id)
    },
    //eslint-disable-next-line
    [state.all]
  )

  useEffect(() => {
    actions.setState({ all: allItems })
    //eslint-disable-next-line
  }, [])

  return {
    allItems: state.all,
    tf2,
    csgo,
    dota,
    selectedItems,
    selectedItemsTotal,
    addItem,
    removeItem,
  }
}
