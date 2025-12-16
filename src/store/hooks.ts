import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

/**
 * Typed dispatch hook
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed selector hook
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;