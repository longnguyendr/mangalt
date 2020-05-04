from setuptools import setup


# List of dependencies installed via `pip install -e .`
requires = [
    'pyramid',
    'waitress',
    'pyramid_chameleon',
    'sqlalchemy',
    'pyramid_tm',
    'zope.sqlalchemy',
]

# List of dependencies installed via `pip install -e ".[dev]"`
dev_requires = [
    'pyramid_debugtoolbar',
    'pytest',
    'webtest',
]
setup(
    name = 'mangalt',
    install_requires=requires,
    extras_require={
        'dev': dev_requires,
    },
    entry_points={
        'paste.app_factory': [
            'main = mangalt:main'
        ],
        'console_scripts': [
            'initialize_mangalt_db = mangalt.initialize_db:main'
        ],

    },
)