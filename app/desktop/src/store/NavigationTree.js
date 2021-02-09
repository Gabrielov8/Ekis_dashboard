Ext.define('Ekis.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',
    fields: [
        {
            name: 'text'
        }
    ],
    root: {
        expanded: true,
        children: [
            {
                text: 'Поиск',
                iconCls: 'search-icon',
                href: 'dashboard',
                leaf: true
            },
            {
                text: 'Dashboard',
                iconCls: 'admin-icon',
                children: [
                    {
                        text: 'Панель блокировок',
                        leaf: true
                    },
                    {
                        text: 'Доступ к API',
                        leaf: true
                    },
                    {
                        text: 'Пользователи',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Задания',
                iconCls: 'task-icon',
                leaf: true
            },
            {
                text: 'Управление данными',
                iconCls: 'server-icon',
                children: [
                    {
                        text: 'Типы данных',
                        leaf: true
                    },
                    {
                        text: 'Справочники',
                        leaf: true
                    },
                    {
                        text: 'Импорт',
                        leaf: true
                    },
                ]
            },
            {
                text: 'Формы',
                iconCls: 'form-icon',
                leaf: true
            },
            {
                text: 'Объявления',
                iconCls: 'unloading-icon',
                leaf: true
            },
            {
                text: 'Выгрузки',
                iconCls: 'advert-icon',
                leaf: true
            },
            {
                text: 'Мониторинг',
                iconCls: 'monitoring-icon',
                leaf: true
            },
        ]
    }
})