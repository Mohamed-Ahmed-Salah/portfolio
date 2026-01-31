# Development Methodology

> A comprehensive, AI-assisted approach to building scalable Flutter applications with clean architecture and modern design principles.

---

## Overview

This methodology represents a systematic approach to software development that combines modern architectural patterns, AI-assisted code quality, and design-driven implementation. Each phase builds upon the previous, creating a cyclical workflow that ensures high-quality, maintainable code while delivering exceptional user experiences.

**Core Philosophy**: Plan thoroughly, design beautifully, code cleanly, review rigorously, and refactor continuously.

---

## The Development Cycle

The development process follows six interconnected phases, forming a hexagonal workflow where each phase influences and supports the others:

```
        ┌─────────────────────┐
        │  1. Requirements    │
        │     & Analysis      │
        └──────────┬──────────┘
                   │
      ┌────────────┴────────────┐
      │                         │
┌─────▼──────┐           ┌─────▼──────┐
│ 6. Refactor│           │ 2. Data &  │
│    & Opt.  │           │   Logic    │
└─────┬──────┘           └─────┬──────┘
      │                         │
      │    ┌─────────────┐     │
      └────►  Quality     ◄─────┘
           │   Center    │
      ┌────►             ◄─────┐
      │    └─────────────┘     │
┌─────┴──────┐           ┌─────┴──────┐
│ 5. Code    │           │ 3. UI/UX   │
│   Review   │           │  Research  │
└─────┬──────┘           └─────┬──────┘
      │                         │
      └────────────┬────────────┘
                   │
        ┌──────────▼──────────┐
        │  4. Development &   │
        │   Implementation    │
        └─────────────────────┘
```

---

## Phase 1: Requirements Understanding & Analysis

### Objective
Deeply understand the feature requirements, business logic, and technical constraints before writing any code.

### Process

**1. Feature Scoping**
- Analyze user stories and acceptance criteria
- Identify data requirements and API contracts
- Define success metrics and edge cases
- Document assumptions and dependencies

**2. Architectural Planning**
- Determine which layers will be affected (domain, data, presentation)
- Identify required entities, use cases, and repositories
- Map out state management needs
- Plan for scalability and future extensions

**3. Documentation**
- Create detailed implementation plans in `/docs/claude-plans/`
- Use timestamped, descriptive filenames (e.g., `2026-01-26-feature-name-plan.md`)
- Include executive summaries, step-by-step breakdowns, and testing checklists
- Document potential risks and mitigation strategies

### Deliverables
- Comprehensive implementation plan (Markdown)
- Architecture decision records
- API contract definitions
- Test scenarios outline

---

## Phase 2: Data Architecture & Logic Design

### Objective
Design the data models, business logic, and Clean Architecture structure before implementation.

### Process

**1. Domain Layer Design**
- Define entities with proper encapsulation
- Design repository interfaces (contracts)
- Create use cases following Single Responsibility Principle
- Ensure domain layer has zero dependencies on other layers

**2. Data Layer Planning**
- Design models that map to API responses
- Plan data sources (remote/local)
- Structure repository implementations
- Design caching strategies when needed

**3. Logic Validation**
- Verify business rules are correctly placed in domain layer
- Ensure data transformations happen at appropriate boundaries
- Validate error handling approach (Either<Failure, Success>)
- Check for potential performance bottlenecks

### Architecture Standards
```
feature/
├── domain/
│   ├── entities/          # Pure business objects
│   ├── repositories/      # Abstract contracts
│   └── usecases/          # Single-purpose business logic
├── data/
│   ├── models/            # JSON serializable
│   ├── datasources/       # API/Cache implementations
│   └── repositories/      # Repository implementations
└── presentation/
    ├── cubits/            # State management
    ├── views/             # Pages/Screens
    └── widgets/           # Reusable components
```

### Deliverables
- Entity definitions
- Repository contracts
- Use case specifications
- Data flow diagrams

---

## Phase 3: UI/UX Design Research

### Objective
Find and adapt modern, user-friendly design patterns that elevate the application's visual appeal and usability.

### Process

**1. Design Discovery**
- **Dribbble**: Explore trending UI patterns and color schemes
- **Pinterest**: Discover user experience flows and interactions
- **Mobbin**: Study production-quality mobile app designs
- Focus on modern, clean aesthetics with intuitive navigation

**2. Design Adaptation**
- Extract color palettes and map to app theme
- Identify component patterns (cards, buttons, bottom sheets)
- Adapt layouts for Flutter implementation
- Ensure accessibility and responsiveness

**3. Design Documentation**
- Create design specification sections in implementation plans
- Document color mappings (e.g., `#FFFFFF` → `Colours.kWhite`)
- Specify typography scales and spacing constants
- Include design rationale and references

**4. Component Planning**
- Break designs into reusable widgets
- Plan widget composition hierarchy
- Identify animation and interaction opportunities
- Design for both light and dark themes

### Design Principles
- **Clean & Minimal**: Focus on content, reduce clutter
- **Consistent**: Follow established design system (`SizeConstants`, theme)
- **Responsive**: Adapt to different screen sizes gracefully
- **Accessible**: Proper contrast, touch targets, screen reader support

### Deliverables
- Design specifications in plan documents
- Color mapping tables
- Widget component breakdown
- Interaction design notes

---

## Phase 4: Development & Implementation

### Objective
Write clean, maintainable code that follows architectural guidelines and design specifications.

### Process

**1. Layer-by-Layer Implementation**

**Domain Layer (Bottom-Up)**
```dart
// 1. Create entities
class Feature {
  final int id;
  final String name;
  // Pure business logic only
}

// 2. Define repository contracts
abstract class FeatureRepository {
  Future<Either<Failure, Feature>> getFeature(int id);
}

// 3. Implement use cases
class GetFeatureUsecase {
  final FeatureRepository repository;

  Future<Either<Failure, Feature>> call(int id) {
    return repository.getFeature(id);
  }
}
```

**Data Layer**
```dart
// 1. Create models with JSON serialization
@JsonSerializable()
class FeatureModel extends Feature {
  FeatureModel({required super.id, required super.name});

  factory FeatureModel.fromJson(Map<String, dynamic> json) =>
      _$FeatureModelFromJson(json);
}

// 2. Implement data sources
class FeatureRemoteDataSource {
  Future<FeatureModel> getFeature(int id) async {
    final response = await client.get('/feature/$id');
    return FeatureModel.fromJson(response.data);
  }
}

// 3. Implement repositories
class FeatureRepositoryImpl implements FeatureRepository {
  final FeatureRemoteDataSource remoteDataSource;

  @override
  Future<Either<Failure, Feature>> getFeature(int id) async {
    try {
      final result = await remoteDataSource.getFeature(id);
      return Right(result);
    } catch (e) {
      return Left(ServerFailure(message: e.toString()));
    }
  }
}
```

**Presentation Layer**
```dart
// 1. Create BLoC/Cubit with Freezed states
@freezed
class FeatureState with _$FeatureState {
  const factory FeatureState.initial() = _InitialState;
  const factory FeatureState.loading() = _LoadingState;
  const factory FeatureState.success(Feature feature) = _SuccessState;
  const factory FeatureState.error(String message) = _ErrorState;
}

// 2. Implement Cubit logic
class FeatureCubit extends Cubit<FeatureState> {
  final GetFeatureUsecase usecase;

  FeatureCubit({required this.usecase}) : super(const FeatureState.initial());

  Future<void> loadFeature(int id) async {
    emit(const FeatureState.loading());

    final result = await usecase(id);

    result.fold(
      (failure) => emit(FeatureState.error(failure.message)),
      (feature) => emit(FeatureState.success(feature)),
    );
  }
}

// 3. Create widgets following design guidelines
class FeatureWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final text = AppLocalizations.of(context);

    return BlocBuilder<FeatureCubit, FeatureState>(
      builder: (context, state) {
        return state.when(
          initial: () => SizedBox.shrink(),
          loading: () => CircularProgressIndicator(),
          success: (feature) => Text(
            feature.name,
            style: theme.textTheme.titleLarge,
          ),
          error: (message) => ErrorWidget(message: message),
        );
      },
    );
  }
}
```

**2. Widget Organization**

**No `_buildX()` Methods**
- Each UI section is a separate, reusable widget
- Promotes testability and reusability
- Keeps widget files focused and manageable

**Component Hierarchy**
```
view/
  └── feature_view.dart              # Page/Screen
widgets/
  ├── feature_header.dart            # Header section
  ├── feature_content.dart           # Main content
  ├── feature_list_item.dart         # List item
  └── feature_filter_panel.dart      # Filter bottom sheet
```

**3. Design Implementation Standards**

- **Spacing**: Use `SizeConstants` for all padding/margins
- **Typography**: Use `theme.textTheme` for all text styles
- **Colors**: Use theme colors (`theme.primaryColor`, `Colours.*`)
- **Localization**: All strings use `"${text?.key}"` pattern
- **Responsiveness**: Use `.w`, `.h`, `.sp` for screen adaptation
- **Accessibility**: Semantic widgets, proper contrast, touch targets

**4. State Management**

- **BLoC/Cubit**: All business logic in cubits
- **Freezed**: Type-safe, immutable state classes
- **Provider**: DI and accessing cubits in widget tree
- **Separation**: UI never contains business logic

### Code Quality Standards

**SOLID Principles**
- **S**ingle Responsibility: Each class has one reason to change
- **O**pen/Closed: Open for extension, closed for modification
- **L**iskov Substitution: Subtypes must be substitutable
- **I**nterface Segregation: Many specific interfaces over one general
- **D**ependency Inversion: Depend on abstractions, not concretions

**KISS Principle**
- Keep It Simple, Stupid
- Avoid over-engineering
- Write readable, straightforward code
- Minimize complexity

**DRY Principle**
- Don't Repeat Yourself
- Extract common logic to utilities/mixins
- Reuse widgets and components
- Share constants and configurations

**Design Patterns**
- **Repository Pattern**: Abstract data sources
- **Facade Pattern**: Simplify complex subsystems
- **Observer Pattern**: BLoC state management
- **Factory Pattern**: Object creation (Freezed)

### Deliverables
- Fully implemented feature following Clean Architecture
- Reusable, well-organized widget components
- Properly configured dependency injection
- Unit tests for domain layer

---

## Phase 5: Code Review & Quality Assurance

### Objective
Ensure code meets quality standards through AI-assisted comprehensive review before merging.

### Process

**1. AI-Assisted Review with Claude Code**

I leverage custom skills built for Claude Code to perform automated, comprehensive code reviews:

**Custom Skill: Code Review**
- Analyzes code against SOLID principles
- Checks for KISS and DRY violations
- Validates Clean Architecture boundaries
- Identifies potential bugs and anti-patterns
- Evaluates BLoC state management implementation
- Reviews error handling patterns
- Checks for proper separation of concerns

**Review Execution**
```bash
# Trigger comprehensive review using custom Claude Code skill
/review-code src/feature_name/
```

The AI review generates detailed reports covering:
- Architecture compliance score
- SOLID principles adherence
- Code quality issues (bugs, anti-patterns)
- Performance concerns
- Security vulnerabilities
- Maintainability assessment

**2. Review Criteria**

**Architecture Review**
- ✅ Domain layer free of external dependencies
- ✅ Business logic in use cases, not cubits/widgets
- ✅ Proper repository abstraction
- ✅ Clean separation of layers

**SOLID Compliance**
- ✅ Single Responsibility: Each class does one thing
- ✅ Open/Closed: Extensible without modification
- ✅ Liskov Substitution: Proper inheritance
- ✅ Interface Segregation: Focused interfaces
- ✅ Dependency Inversion: Abstract dependencies

**KISS & DRY**
- ✅ No over-engineering or unnecessary complexity
- ✅ No code duplication
- ✅ Reusable components and utilities
- ✅ Clear, readable code

**BLoC State Management**
- ✅ States are immutable (Freezed)
- ✅ Business logic in cubits, not widgets
- ✅ Proper state transitions
- ✅ Error states handled gracefully

**Facade Pattern**
- ✅ Complex subsystems hidden behind simple interfaces
- ✅ Multiple data sources managed cleanly
- ✅ API complexity abstracted

**3. Issue Resolution**

After AI review identifies issues:
- Prioritize critical bugs and architecture violations
- Refactor code to meet standards
- Re-run review to verify fixes
- Document learnings for future reference

**4. Documentation Review**
- Verify plan matches implementation
- Update docs with any changes made during development
- Ensure inline comments are meaningful
- Check that public APIs are documented

### AI-Assisted Workflow Benefits

**Speed**: Automated review in minutes vs. hours of manual review
**Consistency**: Same standards applied across all code
**Learning**: AI explains issues and suggests improvements
**Coverage**: Catches issues human reviewers might miss
**Objectivity**: Unbiased assessment based on established principles

### Deliverables
- Comprehensive code review report
- List of issues with severity ratings
- Refactoring recommendations
- Updated documentation

---

## Phase 6: Refactoring & Optimization

### Objective
Continuously improve code quality, performance, and maintainability based on review findings and evolving requirements.

### Process

**1. AI-Assisted Refactoring**

Using custom Claude Code skills for intelligent refactoring:

**Custom Skill: Refactor Code**
- Suggests architectural improvements
- Identifies extraction opportunities (methods, classes, widgets)
- Proposes design pattern applications
- Optimizes performance bottlenecks
- Improves code readability

**Refactoring Execution**
```bash
# Use Claude Code skill to refactor specific areas
/refactor-code src/feature_name/presentation/
```

**2. Refactoring Categories**

**Architecture Refactoring**
- Extract business logic from presentation to domain
- Split god classes into focused components
- Introduce abstractions for better testability
- Align code with Clean Architecture principles

**Performance Optimization**
- Reduce widget rebuilds (const constructors)
- Optimize expensive operations
- Implement proper caching strategies
- Lazy load data when appropriate

**Code Quality Improvements**
- Extract magic numbers to constants
- Replace repeated code with utilities/mixins
- Improve naming for clarity
- Add meaningful comments where necessary

**Widget Refactoring**
- Break large widgets into smaller, reusable components
- Extract `_buildX()` methods to separate widget classes
- Optimize widget trees for performance
- Implement proper keys for list items

**3. Pattern Application**

**Before (Anti-pattern)**
```dart
// Business logic in widget
class CheckInView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () async {
        // ❌ Business logic in UI layer
        final location = await _getCurrentLocation();
        final isInRange = _checkLocationRange(location);
        if (isInRange) {
          final result = await api.checkIn(location);
          // Handle result...
        }
      },
      child: Text('Check In'),
    );
  }
}
```

**After (Clean Architecture + BLoC)**
```dart
// Domain: Use Case
class CheckInUsecase {
  final CheckInRepository repository;

  Future<Either<Failure, CheckInResponse>> call(Location location) {
    return repository.checkIn(location);
  }
}

// Presentation: Cubit
class CheckInCubit extends Cubit<CheckInState> {
  final CheckInUsecase usecase;
  final LocationService locationService;

  Future<void> performCheckIn() async {
    emit(const CheckInState.loading());

    final location = await locationService.getCurrentLocation();
    final result = await usecase(location);

    result.fold(
      (failure) => emit(CheckInState.error(failure.message)),
      (response) => emit(CheckInState.success(response)),
    );
  }
}

// Presentation: Widget
class CheckInView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocBuilder<CheckInCubit, CheckInState>(
      builder: (context, state) {
        return ElevatedButton(
          onPressed: state is! CheckInStateLoading
              ? () => context.read<CheckInCubit>().performCheckIn()
              : null,
          child: Text('${AppLocalizations.of(context)?.checkIn}'),
        );
      },
    );
  }
}
```

**4. Testing & Validation**

After refactoring:
- Run all tests to ensure no regressions
- Manually test affected features
- Use AI review to verify improvements
- Update documentation to reflect changes

**5. Continuous Improvement**

Refactoring is ongoing:
- Address technical debt incrementally
- Apply learnings to new features
- Keep codebase aligned with latest best practices
- Regular code quality audits

### Deliverables
- Refactored, optimized code
- Performance improvement metrics
- Updated documentation
- Regression test results

---

## Tools & Technologies

### Development Stack
- **Flutter**: Cross-platform mobile framework
- **Dart**: Programming language
- **BLoC/Cubit**: State management
- **Freezed**: Code generation for unions/sealed classes
- **Injectable/GetIt**: Dependency injection
- **Dio**: HTTP client
- **Hive**: Local storage

### Design Resources
- **Dribbble**: UI design inspiration
- **Pinterest**: UX patterns and flows
- **Mobbin**: Production mobile app designs

### AI-Assisted Development
- **Claude Code**: AI pair programmer
- **Custom Skills**: Code review and refactoring automation
- **Claude Plans**: AI-generated implementation plans

### Quality Assurance
- **Custom AI Review Skill**: Automated code quality analysis
- **SOLID Principles**: Architecture quality metrics
- **BLoC Patterns**: State management standards
- **Clean Architecture**: Layer separation validation

---

## Quality Standards Summary

### Code Review Checklist
- [ ] SOLID principles followed in all layers
- [ ] KISS: No unnecessary complexity
- [ ] DRY: No code duplication
- [ ] Clean Architecture: Proper layer separation
- [ ] BLoC: State management correctly implemented
- [ ] Facade: Complex systems properly abstracted
- [ ] Design Guidelines: UI follows standards
- [ ] Localization: All strings translated
- [ ] Error Handling: Graceful failure management
- [ ] Performance: No unnecessary rebuilds or blocking operations
- [ ] Documentation: Code is well-documented

### Design Checklist
- [ ] Follows app design system (`SizeConstants`, theme)
- [ ] Responsive across device sizes
- [ ] Accessible (contrast, touch targets, screen readers)
- [ ] Modern, clean aesthetic
- [ ] Consistent with existing UI patterns
- [ ] Smooth animations and transitions
- [ ] Proper loading and error states

---

## Methodology Benefits

### For Development
- **Predictable**: Structured approach reduces surprises
- **Scalable**: Clean Architecture supports growth
- **Maintainable**: SOLID principles ensure code longevity
- **Quality**: AI-assisted review catches issues early
- **Efficient**: Reusable patterns speed up development

### For User Experience
- **Beautiful**: Design-driven approach creates stunning UIs
- **Reliable**: Thorough testing prevents bugs
- **Fast**: Performance optimization ensures smooth experiences
- **Intuitive**: UX research leads to user-friendly flows

### For Collaboration
- **Documented**: Comprehensive plans enable team coordination
- **Consistent**: Standards ensure uniform code quality
- **Reviewable**: Clear structure makes code review effective
- **Onboarding**: Well-organized codebase eases new developer integration

---

## Continuous Evolution

This methodology is not static. Each project teaches new lessons:
- Patterns that work are codified into standards
- AI skills are refined based on review outcomes
- Design guidelines evolve with user feedback
- Architecture adapts to emerging best practices

**The cycle continues**: Requirements → Data → Design → Development → Review → Refactor → Repeat

---

**Result**: High-quality, maintainable applications built with modern architecture, beautiful design, and AI-assisted quality assurance.
