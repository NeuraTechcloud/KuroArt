import React, { createContext, useContext, useState, useEffect } from 'react';
import { COURSES } from '../data/kuroData';
import { HotmartConfig } from '../types';

interface HotmartContextType {
  config: HotmartConfig;
  isModalOpen: boolean;
  activeCourseForEdit: string | null;
  openModal: (courseId?: string) => void;
  closeModal: () => void;
  getCourseLink: (courseId: string) => string;
  updateCourseLink: (courseId: string, newUrl: string) => void;
  updateGlobalAffiliateCode: (code: string) => void;
  resetToDefaults: () => void;
  saveAllLinks: (links: Record<string, string>, affiliateCode: string) => void;
  hasCustomLinks: boolean;
  toastMessage: string | null;
}

const STORAGE_KEY = 'studiokuro_hotmart_v1';

const defaultLinks: Record<string, string> = COURSES.reduce((acc, course) => {
  acc[course.id] = course.defaultHotmartLink;
  return acc;
}, {} as Record<string, string>);

const defaultConfig: HotmartConfig = {
  links: defaultLinks,
  globalAffiliateCode: '',
  instagramUrl: 'https://www.instagram.com/studiokuroart',
  supportEmail: 'contato@studiokuroart.com.br',
  updatedAt: new Date().toISOString(),
};

const HotmartContext = createContext<HotmartContextType | undefined>(undefined);

export const HotmartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<HotmartConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultConfig,
          ...parsed,
          links: { ...defaultLinks, ...(parsed.links || {}) },
        };
      }
    } catch {
      // Fallback
    }
    return defaultConfig;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCourseForEdit, setActiveCourseForEdit] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // ignore
    }
  }, [config]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const openModal = (courseId?: string) => {
    setActiveCourseForEdit(courseId || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveCourseForEdit(null);
  };

  const getCourseLink = (courseId: string): string => {
    const rawLink = config.links[courseId] || defaultLinks[courseId] || '#';
    if (config.globalAffiliateCode && !rawLink.includes('ref=')) {
      const sep = rawLink.includes('?') ? '&' : '?';
      return `${rawLink}${sep}ref=${encodeURIComponent(config.globalAffiliateCode)}`;
    }
    return rawLink;
  };

  const updateCourseLink = (courseId: string, newUrl: string) => {
    setConfig(prev => ({
      ...prev,
      links: {
        ...prev.links,
        [courseId]: newUrl.trim(),
      },
      updatedAt: new Date().toISOString(),
    }));
    showToast('Link do curso atualizado com sucesso!');
  };

  const updateGlobalAffiliateCode = (code: string) => {
    setConfig(prev => ({
      ...prev,
      globalAffiliateCode: code.trim(),
      updatedAt: new Date().toISOString(),
    }));
  };

  const resetToDefaults = () => {
    setConfig(defaultConfig);
    showToast('Links restaurados para o padrão.');
  };

  const saveAllLinks = (links: Record<string, string>, affiliateCode: string) => {
    setConfig(prev => ({
      ...prev,
      links,
      globalAffiliateCode: affiliateCode.trim(),
      updatedAt: new Date().toISOString(),
    }));
    showToast('Todos os links da Hotmart foram salvos!');
    closeModal();
  };

  const hasCustomLinks = Object.keys(config.links).some(
    key => config.links[key] && config.links[key] !== defaultLinks[key]
  );

  return (
    <HotmartContext.Provider
      value={{
        config,
        isModalOpen,
        activeCourseForEdit,
        openModal,
        closeModal,
        getCourseLink,
        updateCourseLink,
        updateGlobalAffiliateCode,
        resetToDefaults,
        saveAllLinks,
        hasCustomLinks,
        toastMessage,
      }}
    >
      {children}
    </HotmartContext.Provider>
  );
};

export const useHotmart = () => {
  const context = useContext(HotmartContext);
  if (!context) {
    throw new Error('useHotmart must be used within a HotmartProvider');
  }
  return context;
};
